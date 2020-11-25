using UnityEngine;
using System;

namespace PuertsTest
{
    public class ShellExplosion : WeChat.PuertsBeefBallBehaviour
    {
        public LayerMask m_TankMask;                        // Used to filter what the explosion affects, this should be set to "Players".
        public ParticleSystem m_ExplosionParticles;         // Reference to the particles that will play on explosion.
        // public AudioSource m_ExplosionAudio;                // Reference to the audio that will play on explosion.
        public float m_MaxDamage = 100f;                    // The amount of damage done if the explosion is centred on a tank.
        public float m_ExplosionForce = 1000f;              // The amount of force added to a tank at the centre of the explosion.
        public float m_MaxLifeTime = 20f;                    // The time in seconds before the shell is removed.
        public float m_ExplosionRadius = 5f;                // The maximum distance away from the explosion tanks can be and are still affected.
        public int m_PlayerNumber = 0;
        public PhyWorld m_PhyWorld;

        new string JSClassName = "src/Shell/ShellExplosion";

        public Action JsReset;
        public void Reset()
        {
          JsReset();
        }

        public Action JsOnTriggerEnter;
        public void OnTriggerEnter() {
          JsOnTriggerEnter();
        }
    }
}