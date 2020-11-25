using UnityEngine;

namespace PuertsTest
{
    public class TankMovement : WeChat.PuertsBeefBallBehaviour
    {
        public int m_PlayerNumber = 1;              // Used to identify which tank belongs to which player.  This is set by this tank's manager.
        public float m_Speed = 12f;                 // How fast the tank moves forward and back.
        public float m_TurnSpeed = 180f;            // How fast the tank turns in degrees per second.
        // public AudioSource m_MovementAudio;         // Reference to the audio source used to play engine sounds. NB: different to the shooting audio source.
        // public AudioClip m_EngineIdling;            // Audio to play when the tank isn't moving.
        // public AudioClip m_EngineDriving;           // Audio to play when the tank is moving.
	      public float m_PitchRange = 0.2f;           // The amount by which the pitch of the engine noises can vary.
        public PhyWorld m_PhyWorld = null;
        public const float sensitivity = 0.01f;
        new string JSClassName = "src/Tank/TankMovement";

    }
}