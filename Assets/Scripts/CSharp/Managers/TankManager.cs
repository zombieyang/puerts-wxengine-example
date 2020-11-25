using System;
using UnityEngine;

namespace PuertsTest
{
    [Serializable]
    public class TankManager
    {
        // This class is to manage various settings on a tank.
        // It works with the GameManager class to control how the tanks behave
        // and whether or not players have control of their tank in the 
        // different phases of the game.

        public Color m_PlayerColor;                             // This is the color this tank will be tinted.
        public Transform m_SpawnPoint;                          // The position and direction the tank will have when it spawns.
        [HideInInspector] public int m_PlayerNumber;            // This specifies which player this the manager for.
        [HideInInspector] public string m_ColoredPlayerText;    // A string that represents the player with their number colored to match their tank.
        [HideInInspector] public GameObject m_Instance;         // A reference to the instance of the tank when it is created.
        [HideInInspector] public int m_Wins;                    // The number of wins this player has so far.
    }
}