using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace PuertsTest
{
    public class GameManager : WeChat.PuertsBeefBallBehaviour
    {
        public int m_NumRoundsToWin = 5;            // The number of rounds a single player has to win to win the game.
        public float m_StartDelay = 3f;             // The delay between the start of RoundStarting and RoundPlaying phases.
        public float m_EndDelay = 3f;               // The delay between the end of RoundPlaying and RoundEnding phases.
        public CameraControl m_CameraControl;       // Reference to the CameraControl script for control during different phases.
        //public Text m_MessageText;                  // Reference to the overlay Text to display winning text, etc.
        public GameObject m_TankPrefab;             // Reference to the prefab the players will control.
        public TankManager[] m_Tanks;               // A collection of managers for enabling and disabling different aspects of the tanks.

        public PhyWorld m_PhyWorld;

        new string JSClassName = "src/Managers/GameManager";
    } 
}