import TankManager from "./TankManager";

export default class GameManager extends PuertsLogic<CS.PuertsTest.GameManager>{

    private m_RoundNumber: number;                  // Which round the game is currently on.
    private m_RoundWinner: CS.PuertsTest.TankManager;          // Reference to the winner of the current round.  Used to make an announcement of who won.
    private m_GameWinner: CS.PuertsTest.TankManager;           // Reference to the winner of the game.  Used to make an announcement of who won.
    private tankManager: TankManager[] = [];

    Start(): void {
        // Create the delays so they only have to be made once.
        // this.m_StartWait = CS.System.TimeSpan.FromSeconds(this.behaviour.m_StartDelay);
        // this.m_EndWait = CS.System.TimeSpan.FromSeconds(this.behaviour.m_EndDelay);

        this.SpawnAllTanks();
        this.SetCameraTargets();

        // Once the tanks have been created and the camera is using them as targets, start the game.
        this.GameLoop()

        // var audio: CS.UnityEngine.AudioSource  = this.behaviour.gameObject.GetComponent(puerts.$typeof(CS.UnityEngine.AudioSource)) as CS.UnityEngine.AudioSource;
        // MiniGameAdaptor.Resources.Load("BackgroundMusic", (result) =>{
        //     audio.clip = (AudioClip)result;
        //     audio.Play();
        // });
    }


    private SpawnAllTanks(): void {
        var Player1 = CS.UnityEngine.GameObject.Find("Player1");
        var Player2 = CS.UnityEngine.GameObject.Find("Player2");

        // For all the tanks...
        for (let i = 0; i < this.behaviour.m_Tanks.Length; i++) {
            const CSTankManager: CS.PuertsTest.TankManager = this.behaviour.m_Tanks.get_Item(i);
            const playerNumber: number = i + 1;
            CSTankManager.m_PlayerNumber = playerNumber;

            const player: CS.UnityEngine.GameObject = i == 0 ? Player1 : Player2;
            CSTankManager.m_Instance = player;
            // 某个版本的插件动态初始化Prefab有问题，这里暂且改成不动态初始化prefab
            // ... create them, set their player number and references needed for control.
            //m_Tanks.get_Item(i).m_Instance = Instantiate(m_TankPrefab, m_Tanks.get_Item(i).m_SpawnPoint.position, m_Tanks.get_Item(i).m_SpawnPoint.rotation) as GameObject;

            var phy = this.behaviour.m_PhyWorld;

            var m_Movement = CSTankManager.m_Instance.GetComponent(
                puerts.$typeof(CS.PuertsTest.TankMovement)
            ) as CS.PuertsTest.TankMovement;
            var m_Shooting = CSTankManager.m_Instance.GetComponent(
                puerts.$typeof(CS.PuertsTest.TankShooting)
            ) as CS.PuertsTest.TankShooting;

            m_Movement.m_PhyWorld = phy;
            m_Shooting.m_PhyWorld = phy;

            (phy as any).jsBehaviour.AddPlayer(
                CSTankManager.m_Instance.GetComponent(
                    puerts.$typeof(CS.UnityEngine.BoxCollider)
                ) as CS.UnityEngine.BoxCollider
            );

            const tankManager = new TankManager;
            tankManager.Setup(
                player,
                playerNumber,
                CSTankManager.m_ColoredPlayerText,
                CSTankManager.m_PlayerColor,
                CSTankManager.m_SpawnPoint
            )
            this.tankManager.push(tankManager)
        }
    }


    private SetCameraTargets(): void {
        // Create a collection of transforms the same size as the number of tanks.
        var targets: CS.System.Array$1<CS.UnityEngine.Transform> = CS.System.Array.CreateInstance(
            puerts.$typeof(CS.UnityEngine.Transform), this.behaviour.m_Tanks.Length
        ) as CS.System.Array$1<CS.UnityEngine.Transform>;

        // new CS.System.Array() as any;

        // For each of these transforms...
        for (let i = 0; i < targets.Length; i++) {
            // ... set it to the appropriate tank transform.
            targets.set_Item(i, this.behaviour.m_Tanks.get_Item(i).m_Instance.transform);
        }

        // These are the targets the camera should follow.
        this.behaviour.m_CameraControl.m_Targets = targets;
    }



    // This is called from start and will run each phase of the game one after another.
    private async GameLoop(): Promise<void> {
        // Start off by running the 'RoundStarting' coroutine but don't return until it's finished.
        await this.RoundStarting();
        // Once the 'RoundStarting' coroutine is finished, run the 'RoundPlaying' coroutine but don't return until it's finished.
        await this.RoundPlaying();
        // Once execution has returned here, run the 'RoundEnding' coroutine, again don't return until it's finished.
        await this.RoundEnding();

        // This code is not run until 'RoundEnding' has finished.  At which point, check if a game winner has been found.
        if (this.m_GameWinner != null) {
            // If there is a game winner, restart the level.
            //SceneManager.LoadScene (0);
            CS.UnityEngine.Debug.Log("Game Over");
        }
        else {
            // If there isn't a winner yet, restart this coroutine so the loop continues.
            // Note that this coroutine doesn't yield.  This means that the current version of the GameLoop will end.
            this.GameLoop();
        }
    }


    private RoundStarting(): Promise<void> {
        // As soon as the round starts reset the tanks and make sure they can't move.
        this.ResetAllTanks();
        this.DisableTankControl();

        // Snap the camera's zoom and position to something appropriate for the reset tanks.
        this.behaviour.m_CameraControl.SetStartPositionAndSize();

        // Increment the round number and display text showing the players what round it is.
        this.m_RoundNumber++;
        //m_MessageText.text = "ROUND " + m_RoundNumber;
        // Wait for the specified length of time until yielding control back to the game loop.
        return new Promise(resolve => {
            setTimeout(resolve, this.behaviour.m_StartDelay * 1000)
        })
    }


    private async RoundPlaying() {
        // As soon as the round begins playing let the players control the tanks.
        this.EnableTankControl();

        // Clear the text from the screen.
        //m_MessageText.text = string.Empty;

        // While there is not one tank left.
        while (!this.OneTankLeft()) {
            // ... return on the next frame.
            await new Promise(resolve => {
                setTimeout(resolve, 16)
            })
        }
        return null;
    }


    private RoundEnding(): Promise<void> {
        CS.UnityEngine.Debug.Log("RoundEngind");
        // Stop tanks from moving.
        this.DisableTankControl();

        // Clear the winner from the previous round.
        this.m_RoundWinner = null;

        // See if there is a winner now the round is over.
        this.m_RoundWinner = this.GetRoundWinner();

        // If there is a winner, increment their score.
        if (this.m_RoundWinner != null)
            this.m_RoundWinner.m_Wins++;

        // Now the winner's score has been incremented, see if someone has one the game.
        this.m_GameWinner = this.GetGameWinner();

        // Get a message based on the scores and whether or not there is a game winner and display it.
        var message: string = this.EndMessage();
        //m_MessageText.text = message;

        // Wait for the specified length of time until yielding control back to the game loop.
        return new Promise(resolve => {
            setTimeout(resolve, this.behaviour.m_EndDelay * 1000)
        })
    }


    // This is used to check if there is one or fewer tanks remaining and thus the round should end.
    private OneTankLeft(): boolean {
        // Start the count of tanks left at zero.
        let numTanksLeft = 0;

        // Go through all the tanks...
        for (let i = 0; i < this.behaviour.m_Tanks.Length; i++) {
            // ... and if they are active, increment the counter.
            if (this.behaviour.m_Tanks.get_Item(i).m_Instance.activeSelf)
                numTanksLeft++;
        }

        // If there are one or fewer tanks remaining return true, otherwise return false.
        return numTanksLeft <= 1;
    }


    // This function is to find out if there is a winner of the round.
    // This function is called with the assumption that 1 or fewer tanks are currently active.
    private GetRoundWinner(): CS.PuertsTest.TankManager {
        // Go through all the tanks...
        for (let i = 0; i < this.behaviour.m_Tanks.Length; i++) {
            // CS.UnityEngine.Debug.Log(this.behaviour.m_Tanks.get_Item(i).m_Instance.activeSelf);
            // ... and if one of them is active, it is the winner so return it.
            if (this.behaviour.m_Tanks.get_Item(i).m_Instance.activeSelf)
                return this.behaviour.m_Tanks.get_Item(i);
        }

        // If none of the tanks are active it is a draw so return null.
        return null;
    }


    // This function is to find out if there is a winner of the game.
    private GetGameWinner(): CS.PuertsTest.TankManager {
        // Go through all the tanks...
        for (let i = 0; i < this.behaviour.m_Tanks.Length; i++) {
            // ... and if one of them has enough rounds to win the game, return it.
            if (this.behaviour.m_Tanks.get_Item(i).m_Wins == this.behaviour.m_NumRoundsToWin)
                return this.behaviour.m_Tanks.get_Item(i);
        }

        // If no tanks have enough rounds to win, return null.
        return null;
    }


    // Returns a string message to display at the end of each round.
    private EndMessage(): string {
        // By default when a round ends there are no winners so the default end message is a draw.
        var message: string = "DRAW!";

        // If there is a winner then change the message to reflect that.
        if (this.m_RoundWinner != null)
            message = this.m_RoundWinner.m_ColoredPlayerText + " WINS THE ROUND!";

        // Add some line breaks after the initial message.
        message += "\n\n\n\n";

        // Go through all the tanks and add each of their scores to the message.
        for (let i = 0; i < this.behaviour.m_Tanks.Length; i++) {
            message += this.behaviour.m_Tanks.get_Item(i).m_ColoredPlayerText + ": " + this.behaviour.m_Tanks.get_Item(i).m_Wins + " WINS\n";
        }

        // If there is a game winner, change the entire message to reflect that.
        if (this.m_GameWinner != null)
            message = this.m_GameWinner.m_ColoredPlayerText + " WINS THE GAME!";

        return message;
    }


    // This function is used to turn all the tanks back on and reset their positions and properties.
    private ResetAllTanks(): void {
        for (let i = 0; i < this.tankManager.length; i++) {
            this.tankManager[i].Reset();
        }
    }


    private EnableTankControl(): void {
        for (let i = 0; i < this.tankManager.length; i++) {
            this.tankManager[i].EnableControl();
        }
    }


    private DisableTankControl(): void {
        for (let i = 0; i < this.tankManager.length; i++) {
            this.tankManager[i].DisableControl();
        }
    }
}