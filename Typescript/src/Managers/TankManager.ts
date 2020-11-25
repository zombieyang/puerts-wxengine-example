export default class TankManager {

    private m_Movement: CS.PuertsTest.TankMovement;                        // Reference to tank's movement script, used to disable and enable control.
    private m_Shooting: CS.PuertsTest.TankShooting;                        // Reference to tank's shooting script, used to disable and enable control.
    private m_CanvasGameObject: CS.UnityEngine.GameObject;                  // Used to disable the world space UI during the Starting and Ending phases of each round.
    private m_Instance: CS.UnityEngine.GameObject;
    private m_SpawnPoint: CS.UnityEngine.Transform;

    public Setup(
        m_Instance: CS.UnityEngine.GameObject,
        m_PlayerNumber: number,
        m_ColoredPlayerText: string,
        m_PlayerColor: CS.UnityEngine.Color,
        m_SpawnPoint: CS.UnityEngine.Transform
    ): void {
        this.m_Instance = m_Instance;
        this.m_SpawnPoint = m_SpawnPoint;
        // Get references to the components.
        this.m_Movement = m_Instance.GetComponent(
            puerts.$typeof(CS.PuertsTest.TankMovement)
        ) as CS.PuertsTest.TankMovement;
        this.m_Shooting = m_Instance.GetComponent(
            puerts.$typeof(CS.PuertsTest.TankShooting)
        ) as CS.PuertsTest.TankShooting;
        //m_CanvasGameObject = m_Instance.GetComponentInChildren<Canvas> ().gameObject;

        // Set the player numbers to be consistent across the scripts.
        this.m_Movement.m_PlayerNumber = m_PlayerNumber;
        this.m_Shooting.m_PlayerNumber = m_PlayerNumber;

        // Create a string using the correct color that says 'PLAYER 1' etc based on the tank's color and the player's number.
        m_ColoredPlayerText = "<color=#" + CS.UnityEngine.ColorUtility.ToHtmlStringRGB(m_PlayerColor) + ">PLAYER " + m_PlayerNumber + "</color>";

        // Get all of the renderers of the tank.
        var renderers: CS.System.Array$1<CS.UnityEngine.MeshRenderer> = m_Instance.GetComponentsInChildren(puerts.$typeof(CS.UnityEngine.MeshRenderer)) as CS.System.Array$1<CS.UnityEngine.MeshRenderer>;

        // Go through all the renderers...
        for (let i = 0; i < renderers.Length; i++) {
            // ... set their material color to the color specific to this tank.
            renderers[i].material.color = m_PlayerColor;
        }
    }


    // Used during the phases of the game where the player shouldn't be able to control their tank.
    public DisableControl(): void {
        this.m_Movement.enabled = false;
        this.m_Shooting.enabled = false;

        //m_CanvasGameObject.SetActive (false);
    }


    // Used during the phases of the game where the player should be able to control their tank.
    public EnableControl(): void {
        this.m_Movement.enabled = true;
        this.m_Shooting.enabled = true;

        //m_CanvasGameObject.SetActive (true);
    }


    // Used at the start of each round to put the tank into it's default state.
    public Reset(): void {
        this.m_Instance.transform.position = this.m_SpawnPoint.position;
        this.m_Instance.transform.rotation = this.m_SpawnPoint.rotation;

        this.m_Instance.SetActive(false);
        this.m_Instance.SetActive(true);
    }
}