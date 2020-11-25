using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;
namespace PuertsTest
{

    public class PhyWorld : WeChat.PuertsBeefBallBehaviour
    {
        // Start is called before the first frame update
        public Transform StaticWorld;
        public Transform player1;
        public Transform player2;
        new string JSClassName = "src/PhyWorld";

        public Action<BoxCollider> JSAddPlayer;
        public void AddPlayer(BoxCollider box)
        {
            JSAddPlayer(box);
        }

        public Action<BoxCollider, int> JSCheckCollideWithPlayer;
        public BoxCollider CheckCollideWithPlayer(BoxCollider box, int playerNum)
        {
            return null;
            // return JSCheckCollideWithPlayer(box, playerNum);
        }

        public Action<BoxCollider> JSCheckCollideWithStatic;
        public BoxCollider CheckCollideWithStatic(BoxCollider box)
        {
            return null;
            // return JSCheckCollideWithStatic(box);
        }
    }
}