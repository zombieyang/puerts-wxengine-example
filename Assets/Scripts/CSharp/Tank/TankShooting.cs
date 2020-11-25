using UnityEngine;
using UnityEngine.UI;
using System;
using System.Collections.Generic;

namespace PuertsTest
{
    public class TankShooting : WeChat.PuertsBeefBallBehaviour
    {
        public int m_PlayerNumber = 1;              // Used to identify the different players.
        //public Rigidbody m_Shell;                   // Prefab of the shell.
        // public GameObject m_Shell;                   // Prefab of the shell.

        public string m_ShellPath;
        public Transform m_FireTransform;           // A child of the tank where the shells are spawned.
        public Slider m_AimSlider;                  // A child of the tank that displays the current launch force.
        // public AudioSource m_ShootingAudio;         // Reference to the audio source used to play the shooting audio. NB: different to the movement audio source.
        // public AudioClip m_ChargingClip;            // Audio that plays when each shot is charging up.
        // public AudioClip m_FireClip;                // Audio that plays when each shot is fired.
        public float m_MinLaunchForce = 15f;        // The force given to the shell if the fire button is not held.
        public float m_MaxLaunchForce = 30f;        // The force given to the shell if the fire button is held for the max charge time.
        public float m_MaxChargeTime = 0.75f;       // How long the shell can charge for before it is fired at max force.
        public float m_FireInterval;
        public PhyWorld m_PhyWorld = null;


        new string JSClassName = "src/Tank/TankShooting";
    }
}