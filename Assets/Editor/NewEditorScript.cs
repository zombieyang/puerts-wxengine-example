using System.IO;
using UnityEditor;
using UnityEngine;

public class Test {
  [MenuItem("test/test")]
  static void Test1() {
    GameObject current = Selection.activeGameObject;
    PuertsTest.TankMovement move = current.GetComponent<PuertsTest.TankMovement>();
    new WeChat.PuertsBeefBallBehaviourConverter(move).GetJSON();
  }
}