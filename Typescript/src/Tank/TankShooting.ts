import ShellExplosion from "../Shell/ShellExplosion";
import ShellPool from "../Shell/ShellPool";

export default class TankShooting extends PuertsLogic<CS.PuertsTest.TankShooting> {

  private m_FireButton: string;                // The input axis that is used for launching shells.
  private m_CurrentLaunchForce: number;         // The force that will be given to the shell when the fire button is released.
  private m_ChargeSpeed: number;                // How fast the launch force increases, based on the max charge time.
  //private bool m_Fired;                       // Whether or not the shell has been launched with this button press.
  private m_Shell: PuertsBeefBallSDK.Prefab = null;


  lastT: Date = new Date;
  private m_ShellInstanceList: Array<ShellExplosion> = [];


  OnEnable(): void {
    // When the tank is turned on, reset the launch force and the UI
    this.m_CurrentLaunchForce = this.behaviour.m_MinLaunchForce;
    //m_AimSlider.value = m_MinLaunchForce;
    PuertsBeefBallSDK.load<PuertsBeefBallSDK.Prefab>(this.behaviour.m_ShellPath)
      .then((prefab: PuertsBeefBallSDK.Prefab) => {
        CS.UnityEngine.Debug.Log(!!prefab);
        this.m_Shell = prefab;
      })
  }


  Start(): void {
    // The fire axis is based on the player number.
    this.m_FireButton = "Fire" + this.behaviour.m_PlayerNumber;

    // The rate that the launch force charges up is the range of possible forces by the max charge time.
    this.m_ChargeSpeed = (this.behaviour.m_MaxLaunchForce - this.behaviour.m_MinLaunchForce) / this.behaviour.m_MaxChargeTime;
  }


  public Update() {
    var time = new Date;
    var dt = (time.getTime() - this.lastT.getTime()) / 1000;
    if (dt >= this.behaviour.m_FireInterval && this.m_Shell != null) {
      this.Fire();
      this.lastT = time;
    }
  }


  private Fire(): void {
    //// Set the fired flag so only Fire is only called once.
    //m_Fired = true;

    var shellInstance: CS.UnityEngine.GameObject = ShellPool.Create(
      this.m_Shell,
      this.behaviour.m_FireTransform.transform.position,
      this.behaviour.m_FireTransform.transform.rotation
    ) as CS.UnityEngine.GameObject;
    var shell: CS.PuertsTest.ShellExplosion = shellInstance.GetComponent(puerts.$typeof(CS.PuertsTest.ShellExplosion)) as CS.PuertsTest.ShellExplosion;
    shell.Reset();
    shell.m_PhyWorld = (this.behaviour as any).m_PhyWorld;
    shell.m_PlayerNumber = (this.behaviour as any).m_PlayerNumber;

  }
}