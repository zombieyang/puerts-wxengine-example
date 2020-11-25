
export default class CameraControl extends PuertsLogic<CS.PuertsTest.CameraControl> {

    private m_Camera: CS.UnityEngine.Camera;                        // Used for referencing the camera.
    private m_ZoomSpeed: number = 0;                      // Reference speed for the smooth damping of the orthographic size.
    private m_MoveVelocity: CS.UnityEngine.Vector3 = new CS.UnityEngine.Vector3(0, 0, 0);                 // Reference velocity for the smooth damping of the position.
    private m_DesiredPosition: CS.UnityEngine.Vector3 = new CS.UnityEngine.Vector3(0, 0, 0);              // The position the camera is moving towards.

    constructor(mono) {
        super(mono);
        this.behaviour.JsSetStartPositionAndSize = this.SetStartPositionAndSize.bind(this);
    }

    Awake(): void {
        var type = puerts.$typeof(CS.UnityEngine.Camera);
        this.m_Camera = this.behaviour.GetComponentInChildren(type) as CS.UnityEngine.Camera;
    }


    Update(): void {
        // Move the camera towards a desired position.
        this.Move();

        // Change the size of the camera based.
        this.Zoom();
    }


    private Move(): void {
        // Find the average position of the targets.
        this.FindAveragePosition();

        const ref = puerts.$ref(this.m_MoveVelocity);
        // Smoothly transition to that position.
        this.behaviour.transform.position = CS.UnityEngine.Vector3.SmoothDamp(
            this.behaviour.transform.position, 
            this.m_DesiredPosition, 
            ref, 
            this.behaviour.m_DampTime
        );
        this.m_MoveVelocity = ref.value
    }


    private FindAveragePosition(): void {
        var averagePos: CS.UnityEngine.Vector3 = new CS.UnityEngine.Vector3(0, 0, 0);
        var numTargets: number = 0;

        // Go through all the targets and add their positions together.
        for (let i = 0; i < this.behaviour.m_Targets.Length; i++) {
            // If the target isn't active, go on to the next one.
            if (!(this.behaviour.m_Targets.get_Item(i).gameObject.activeSelf))
                continue;

            // Add to the average and increment the number of targets in the average.
            averagePos = CS.UnityEngine.Vector3.op_Addition(
                averagePos,
                this.behaviour.m_Targets.get_Item(i).position
            );
            numTargets++;
        }

        // If there are targets divide the sum of the positions by the number of them to find the average.
        if (numTargets > 0)
            averagePos = CS.UnityEngine.Vector3.op_Division(averagePos, numTargets);

        // Keep the same y value.
        averagePos.y = this.behaviour.transform.position.y;

        // The desired position is the average position;
        this.m_DesiredPosition = averagePos;
    }


    private Zoom(): void {
        // Find the required size based on the desired position and smoothly transition to that size.
        var requiredSize: number = this.FindRequiredSize();

        const ref = puerts.$ref(this.m_ZoomSpeed);
        this.m_Camera.orthographicSize = CS.UnityEngine.Mathf.SmoothDamp(
            this.m_Camera.orthographicSize, 
            requiredSize, 
            ref, 
            this.behaviour.m_DampTime
        );
        this.m_ZoomSpeed = ref.value;
    }


    private FindRequiredSize(): number {
        // Find the position the camera rig is moving towards in its local space.
        var desiredLocalPos: CS.UnityEngine.Vector3 = this.behaviour.transform.InverseTransformPoint(
            this.m_DesiredPosition.x,
            this.m_DesiredPosition.y,
            this.m_DesiredPosition.z
        );

        // Start the camera's size calculation at zero.
        var size: number = 0;

        // Go through all the targets...
        for (let i = 0; i < this.behaviour.m_Targets.Length; i++) {
            // ... and if they aren't active continue on to the next target.
            if (!this.behaviour.m_Targets[i].gameObject.activeSelf)
                continue;

            // Otherwise, find the position of the target in the camera's local space.
            var targetLocalPos: CS.UnityEngine.Vector3 = this.behaviour.transform.InverseTransformPoint(
                this.behaviour.m_Targets[i].position.x,
                this.behaviour.m_Targets[i].position.y,
                this.behaviour.m_Targets[i].position.z
            );

            // Find the position of the target from the desired position of the camera's local space.
            var desiredPosToTarget: CS.UnityEngine.Vector3 = CS.UnityEngine.Vector3.op_Subtraction(targetLocalPos, desiredLocalPos);

            // Choose the largest out of the current size and the distance of the tank 'up' or 'down' from the camera.
            size = CS.UnityEngine.Mathf.Max(size, CS.UnityEngine.Mathf.Abs(desiredPosToTarget.y));

            // Choose the largest out of the current size and the calculated size based on the tank being to the left or right of the camera.
            size = CS.UnityEngine.Mathf.Max(size, CS.UnityEngine.Mathf.Abs(desiredPosToTarget.x) / this.m_Camera.aspect);
        }

        // Add the edge buffer to the size.
        size += this.behaviour.m_ScreenEdgeBuffer;
        // Make sure the camera's size isn't below the minimum.
        size = CS.UnityEngine.Mathf.Max(size, this.behaviour.m_MinSize);

        return size;
    }


    public SetStartPositionAndSize(): void {
        // Find the desired position.
        this.FindAveragePosition();

        // Set the camera's position to the desired position without damping.
        this.behaviour.transform.position = this.m_DesiredPosition;

        // Find and set the required size of the camera.
        this.m_Camera.orthographicSize = this.FindRequiredSize();
    }
}