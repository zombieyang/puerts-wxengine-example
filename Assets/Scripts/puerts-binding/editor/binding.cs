
using System;
using System.Collections.Generic;
using Puerts;

[Configure]
class ScriptBinding
{
    [Binding]
    static public List<Type> binding
    {
        get
        {
            return new List<Type>()
            {
                typeof(PuertsTest.PhyWorld),
                typeof(PuertsTest.CameraControl),
                typeof(PuertsTest.GameManager),
                typeof(PuertsTest.ShellExplosion),
                typeof(PuertsTest.TankHealth),
                typeof(PuertsTest.TankManager),
                typeof(PuertsTest.TankMovement),
                typeof(PuertsTest.TankShooting),
                typeof(PuertsTest.UIDirectionControl)
            };
        }
    }
}