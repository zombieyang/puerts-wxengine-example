using UnityEngine;
using UnityEngine.UI;

namespace PuertsTest
{
    public class TankHealth : WeChat.PuertsBeefBallBehaviour
    {
        public float m_StartingHealth = 100f;               // The amount of health each tank starts with.
        public Slider m_Slider;                             // The slider to represent how much health the tank currently has.
        public Image m_FillImage;                           // The image component of the slider.
        public Color m_FullHealthColor = Color.green;       // The color the health bar will be when on full health.
        public Color m_ZeroHealthColor = Color.red;         // The color the health bar will be when on no health.
        // public GameObject m_ExplosionPrefab;                // A prefab that will be instantiated in Awake, then used whenever the tank dies.
        
        public string m_ExplosionPrefabPath;

        new string JSClassName = "src/Tank/TankHealth";
        
    }
}