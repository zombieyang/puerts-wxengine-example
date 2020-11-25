export default class TankMovement extends PuertsLogic<CS.PuertsTest.TankMovement> {

    private m_MovementAxisName: string;          // The name of the input axis for moving forward and back.
    private m_TurnAxisName: string;              // The name of the input axis for turning.
    //private Rigidbody m_Rigidbody;              // Reference used to move the tank.
    private m_MovementInputValue: number;         // The current value of the movement input.
    private m_TurnInputValue: number;             // The current value of the turn input.
    //private float m_OriginalPitch;              // The pitch of the audio source at the start of the scene.
    private m_particleSystems: CS.System.Array$1<CS.UnityEngine.ParticleSystem>; // References to all the particles systems used by the Tanks

    private flag: boolean = false;
    private origin: CS.UnityEngine.Vector3;
    private m_boxCollider: CS.UnityEngine.BoxCollider = null;

    public static sensitivity = 0.01;

    OnEnable(): void {
        // When the tank is turned on, make sure it's not kinematic.
        //m_Rigidbody.isKinematic = false;

        // Also reset the input values.
        this.m_MovementInputValue = 0;
        this.m_TurnInputValue = 0;

        // We grab all the Particle systems child of that Tank to be able to Stop/Play them on Deactivate/Activate
        // It is needed because we move the Tank when spawning it, and if the Particle System is playing while we do that
        // it "think" it move from (0,0,0) to the spawn point, creating a huge trail of smoke
        this.m_particleSystems = this.behaviour.GetComponentsInChildren(puerts.$typeof(CS.UnityEngine.ParticleSystem)) as CS.System.Array$1<CS.UnityEngine.ParticleSystem>;
        for (let i = 0; i < this.m_particleSystems.Length; ++i) {
            this.m_particleSystems[i].Play();
        }
    }


    OnDisable(): void {
        // When the tank is turned off, set it to kinematic so it stops moving.
        //m_Rigidbody.isKinematic = true;

        // Stop all particle system so it "reset" it's position to the actual one instead of thinking we moved when spawning
        for (let i = 0; i < this.m_particleSystems.Length; ++i) {
            this.m_particleSystems.get_Item(i).Stop();
        }
    }


    Start(): void {
        // The axes names are based on player number.
        this.m_MovementAxisName = "Vertical" + this.behaviour.m_PlayerNumber;
        this.m_TurnAxisName = "Horizontal" + this.behaviour.m_PlayerNumber;

        this.m_boxCollider = this.behaviour.GetComponent(puerts.$typeof(CS.UnityEngine.BoxCollider)) as CS.UnityEngine.BoxCollider;

        // Store the original pitch of the audio source.
        //m_OriginalPitch = m_MovementAudio.pitch;
    }

    Update() {
        // Store the value of both input axes.
        //m_MovementInputValue = Input.GetAxis (m_MovementAxisName);
        //m_TurnInputValue = Input.GetAxis(m_TurnAxisName);

        //EngineAudio ();

        let playerNumber = (this.behaviour.GetComponent(puerts.$typeof(CS.PuertsTest.TankShooting)) as CS.PuertsTest.TankShooting).m_PlayerNumber;
        if (playerNumber != 1) {
            return;
        }
        if (CS.UnityEngine.Input.GetMouseButtonDown(0)) {
            if (!this.flag) {
                this.flag = true;
                this.origin = CS.UnityEngine.Input.mousePosition;
            }

        }
        if (this.flag) {
            var dir = new CS.UnityEngine.Vector3(
                (this.origin.x - CS.UnityEngine.Input.mousePosition.x) * TankMovement.sensitivity,
                0.0, 
                (this.origin.y - CS.UnityEngine.Input.mousePosition.y) * TankMovement.sensitivity
            );
            dir.x = (this.origin.x - CS.UnityEngine.Input.mousePosition.x) * TankMovement.sensitivity;
            dir.y = 0.0;
            dir.z = (this.origin.y - CS.UnityEngine.Input.mousePosition.y) * TankMovement.sensitivity;

            if (dir.magnitude < 0.00000001)
            {
                if (CS.UnityEngine.Input.GetMouseButtonUp(0)) {
                    this.flag = false;
                }
                return;
            }


            // m_Body.SetLinearVelocity(new Vec3(dir.x, dir.y, dir.z));
            if (dir.magnitude > 0.1)
            {
                dir = CS.UnityEngine.Vector3.op_Multiply(0.1, dir.normalized)
            }
            var backup = this.behaviour.gameObject.transform.position;

            this.behaviour.gameObject.transform.position = CS.UnityEngine.Vector3.op_Subtraction(
                this.behaviour.gameObject.transform.position, dir
            );
            this.behaviour.gameObject.transform.forward = CS.UnityEngine.Vector3.op_Subtraction(
                new CS.UnityEngine.Vector3(0, 0, 0), dir.normalized
            );

            var other = (this.behaviour.m_PhyWorld as any).jsBehaviour.CheckCollideWithStatic(this.m_boxCollider);
            if (other != null) {
                this.behaviour.gameObject.transform.position = backup;
                // Debug.Log("player intersect: " + other.name.ToString());
            }
        }
        if (CS.UnityEngine.Input.GetMouseButtonUp(0)) {
            this.flag = false;
        }
    }
}