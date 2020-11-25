using UnityEngine;

namespace PuertsTest
{
    public class UIDirectionControl : WeChat.PuertsBeefBallBehaviour
    {
        // This class is used to make sure world space UI
        // elements such as the health bar face the correct direction.

        public bool m_UseRelativeRotation = true;       // Use relative rotation should be used for this gameobject?
        new string JSClassName = "src/UI/UIDirectionControl";

    }
}