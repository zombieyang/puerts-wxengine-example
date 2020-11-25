export default class UIDirectionControl extends PuertsLogic<CS.PuertsTest.UIDirectionControl> {

    private m_RelativeRotation: CS.UnityEngine.Quaternion;          // The local rotatation at the start of the scene.


    Start(): void {
        this.m_RelativeRotation = this.behaviour.transform.parent.localRotation;
    }


    Update(): void {
        if (this.behaviour.m_UseRelativeRotation)
            this.behaviour.transform.rotation = this.m_RelativeRotation;
    }
}