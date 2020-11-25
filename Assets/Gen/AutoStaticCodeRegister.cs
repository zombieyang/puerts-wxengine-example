namespace PuertsStaticWrap
{
    public static class AutoStaticCodeRegister
    {
        public static void Register(Puerts.JsEnv jsEnv)
        {
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsTest.PhyWorld), PuertsTest_PhyWorld_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsTest.CameraControl), PuertsTest_CameraControl_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsTest.GameManager), PuertsTest_GameManager_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsTest.ShellExplosion), PuertsTest_ShellExplosion_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsTest.TankHealth), PuertsTest_TankHealth_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsTest.TankManager), PuertsTest_TankManager_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsTest.TankMovement), PuertsTest_TankMovement_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsTest.TankShooting), PuertsTest_TankShooting_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsTest.UIDirectionControl), PuertsTest_UIDirectionControl_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Mathf), UnityEngine_Mathf_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Debug), UnityEngine_Debug_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector3), UnityEngine_Vector3_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Collections.Generic.List<int>), System_Collections_Generic_List_1_System_Int32__Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Array), System_Array_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Collections.Generic.Dictionary<string, System.Collections.Generic.List<int>>), System_Collections_Generic_Dictionary_2_System_String_System_Collections_Generic_List_1_System_Int32___Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Time), UnityEngine_Time_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Transform), UnityEngine_Transform_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Component), UnityEngine_Component_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GameObject), UnityEngine_GameObject_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Object), UnityEngine_Object_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Delegate), System_Delegate_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Object), System_Object_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Type), System_Type_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem), UnityEngine_ParticleSystem_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.MainModule), UnityEngine_ParticleSystem_MainModule_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Canvas), UnityEngine_Canvas_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Behaviour), UnityEngine_Behaviour_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MonoBehaviour), UnityEngine_MonoBehaviour_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Camera), UnityEngine_Camera_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.DateTime), System_DateTime_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(System.TimeSpan), System_TimeSpan_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoxCollider), UnityEngine_BoxCollider_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Physics), UnityEngine_Physics_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Rigidbody), UnityEngine_Rigidbody_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioSource), UnityEngine_AudioSource_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Input), UnityEngine_Input_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ColorUtility), UnityEngine_ColorUtility_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MeshRenderer), UnityEngine_MeshRenderer_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Resources), UnityEngine_Resources_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Application), UnityEngine_Application_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(WeChat.PuertsBeefBallBehaviour), WeChat_PuertsBeefBallBehaviour_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsBeefBallSDK.Prefab), PuertsBeefBallSDK_Prefab_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsBeefBallSDK.RemoteResource), PuertsBeefBallSDK_RemoteResource_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.EventSystems.UIBehaviour), UnityEngine_EventSystems_UIBehaviour_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Selectable), UnityEngine_UI_Selectable_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Button), UnityEngine_UI_Button_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Button.ButtonClickedEvent), UnityEngine_UI_Button_ButtonClickedEvent_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Events.UnityEvent), UnityEngine_Events_UnityEvent_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.InputField), UnityEngine_UI_InputField_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Toggle), UnityEngine_UI_Toggle_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Toggle.ToggleEvent), UnityEngine_UI_Toggle_ToggleEvent_Wrap.GetRegisterInfo);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Events.UnityEvent<bool>), UnityEngine_Events_UnityEvent_1_System_Boolean__Wrap.GetRegisterInfo);
            
        }
    }
}