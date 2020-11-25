
declare namespace CS {
    interface $Ref<T> {
        value: T
    }
    
    type $Extension<T1, T2> = {
        [P in keyof T2] : T2[P] extends (obj:T1, ...args: infer P) => infer R ? (...args: P) => R : never;
    }
    
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            
            set_Item(index: number, value: T):void;
        }
    }
    
    interface $Task<T> {}
    
    namespace PuertsTest {
        class PhyWorld extends WeChat.PuertsBeefBallBehaviour {
            public StaticWorld: UnityEngine.Transform;
            public player1: UnityEngine.Transform;
            public player2: UnityEngine.Transform;
            public JSAddPlayer: System.Action$1<UnityEngine.BoxCollider>;
            public JSCheckCollideWithPlayer: System.Action$2<UnityEngine.BoxCollider, number>;
            public JSCheckCollideWithStatic: System.Action$1<UnityEngine.BoxCollider>;
            public constructor();
            public AddPlayer($box: UnityEngine.BoxCollider):void;
            public CheckCollideWithPlayer($box: UnityEngine.BoxCollider, $playerNum: number):UnityEngine.BoxCollider;
            public CheckCollideWithStatic($box: UnityEngine.BoxCollider):UnityEngine.BoxCollider;
            
        }
        class CameraControl extends WeChat.PuertsBeefBallBehaviour {
            public m_DampTime: number;
            public m_ScreenEdgeBuffer: number;
            public m_MinSize: number;
            public m_Targets: System.Array$1<UnityEngine.Transform>;
            public JsSetStartPositionAndSize: System.Action;
            public constructor();
            public SetStartPositionAndSize():void;
            
        }
        class GameManager extends WeChat.PuertsBeefBallBehaviour {
            public m_NumRoundsToWin: number;
            public m_StartDelay: number;
            public m_EndDelay: number;
            public m_CameraControl: PuertsTest.CameraControl;
            public m_TankPrefab: UnityEngine.GameObject;
            public m_Tanks: System.Array$1<PuertsTest.TankManager>;
            public m_PhyWorld: PuertsTest.PhyWorld;
            public constructor();
            
        }
        class TankManager extends System.Object {
            public m_PlayerColor: UnityEngine.Color;
            public m_SpawnPoint: UnityEngine.Transform;
            public m_PlayerNumber: number;
            public m_ColoredPlayerText: string;
            public m_Instance: UnityEngine.GameObject;
            public m_Wins: number;
            public constructor();
            
        }
        class ShellExplosion extends WeChat.PuertsBeefBallBehaviour {
            public m_TankMask: UnityEngine.LayerMask;
            public m_ExplosionParticles: UnityEngine.ParticleSystem;
            public m_MaxDamage: number;
            public m_ExplosionForce: number;
            public m_MaxLifeTime: number;
            public m_ExplosionRadius: number;
            public m_PlayerNumber: number;
            public m_PhyWorld: PuertsTest.PhyWorld;
            public JsReset: System.Action;
            public JsOnTriggerEnter: System.Action;
            public constructor();
            public Reset():void;
            public OnTriggerEnter():void;
            
        }
        class TankHealth extends WeChat.PuertsBeefBallBehaviour {
            public m_StartingHealth: number;
            public m_Slider: UnityEngine.UI.Slider;
            public m_FillImage: UnityEngine.UI.Image;
            public m_FullHealthColor: UnityEngine.Color;
            public m_ZeroHealthColor: UnityEngine.Color;
            public m_ExplosionPrefabPath: string;
            public constructor();
            
        }
        class TankMovement extends WeChat.PuertsBeefBallBehaviour {
            public m_PlayerNumber: number;
            public m_Speed: number;
            public m_TurnSpeed: number;
            public m_PitchRange: number;
            public m_PhyWorld: PuertsTest.PhyWorld;
            public static sensitivity: number;
            public constructor();
            
        }
        class TankShooting extends WeChat.PuertsBeefBallBehaviour {
            public m_PlayerNumber: number;
            public m_ShellPath: string;
            public m_FireTransform: UnityEngine.Transform;
            public m_AimSlider: UnityEngine.UI.Slider;
            public m_MinLaunchForce: number;
            public m_MaxLaunchForce: number;
            public m_MaxChargeTime: number;
            public m_FireInterval: number;
            public m_PhyWorld: PuertsTest.PhyWorld;
            public constructor();
            
        }
        class UIDirectionControl extends WeChat.PuertsBeefBallBehaviour {
            public m_UseRelativeRotation: boolean;
            public constructor();
            
        }
        
    }
    namespace WeChat {
        class PuertsBeefBallBehaviour extends UnityEngine.MonoBehaviour {
            public JSClassName: string;
            public JsStart: System.Action;
            public JsAwake: System.Action;
            public JsUpdate: System.Action;
            public JsOnDestroy: System.Action;
            public JsOnEnable: System.Action;
            public JsOnDisable: System.Action;
            public constructor();
            
        }
        
    }
    namespace UnityEngine {
        class MonoBehaviour extends UnityEngine.Behaviour {
            public useGUILayout: boolean;
            public runInEditMode: boolean;
            public constructor();
            public IsInvoking():boolean;
            public CancelInvoke():void;
            public Invoke($methodName: string, $time: number):void;
            public InvokeRepeating($methodName: string, $time: number, $repeatRate: number):void;
            public CancelInvoke($methodName: string):void;
            public IsInvoking($methodName: string):boolean;
            public StartCoroutine($methodName: string):UnityEngine.Coroutine;
            public StartCoroutine($methodName: string, $value: any):UnityEngine.Coroutine;
            public StartCoroutine($routine: System.Collections.IEnumerator):UnityEngine.Coroutine;
            public StopCoroutine($routine: System.Collections.IEnumerator):void;
            public StopCoroutine($routine: UnityEngine.Coroutine):void;
            public StopCoroutine($methodName: string):void;
            public StopAllCoroutines():void;
            public static print($message: any):void;
            
        }
        class Behaviour extends UnityEngine.Component {
            public enabled: boolean;
            public isActiveAndEnabled: boolean;
            public constructor();
            
        }
        class Component extends UnityEngine.Object {
            public transform: UnityEngine.Transform;
            public gameObject: UnityEngine.GameObject;
            public tag: string;
            public constructor();
            public GetComponent($type: System.Type):UnityEngine.Component;
            public GetComponent($type: string):UnityEngine.Component;
            public GetComponentInChildren($t: System.Type, $includeInactive: boolean):UnityEngine.Component;
            public GetComponentInChildren($t: System.Type):UnityEngine.Component;
            public GetComponentsInChildren($t: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            public GetComponentsInChildren($t: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponentInParent($t: System.Type):UnityEngine.Component;
            public GetComponentsInParent($t: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            public GetComponentsInParent($t: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponents($type: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponents($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>):void;
            public CompareTag($tag: string):boolean;
            public SendMessageUpwards($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            public SendMessageUpwards($methodName: string, $value: any):void;
            public SendMessageUpwards($methodName: string):void;
            public SendMessageUpwards($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            public SendMessage($methodName: string, $value: any):void;
            public SendMessage($methodName: string):void;
            public SendMessage($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            public SendMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            public BroadcastMessage($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions):void;
            public BroadcastMessage($methodName: string, $parameter: any):void;
            public BroadcastMessage($methodName: string):void;
            public BroadcastMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            
        }
        class Object extends System.Object {
            public name: string;
            public hideFlags: UnityEngine.HideFlags;
            public constructor();
            public GetInstanceID():number;
            public static op_Implicit($exists: UnityEngine.Object):boolean;
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):UnityEngine.Object;
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform):UnityEngine.Object;
            public static Instantiate($original: UnityEngine.Object):UnityEngine.Object;
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform):UnityEngine.Object;
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform, $instantiateInWorldSpace: boolean):UnityEngine.Object;
            public static Instantiate($original: UnityEngine.Object):UnityEngine.Object;
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):UnityEngine.Object;
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform):UnityEngine.Object;
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform):UnityEngine.Object;
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform, $worldPositionStays: boolean):UnityEngine.Object;
            public static Destroy($obj: UnityEngine.Object, $t: number):void;
            public static Destroy($obj: UnityEngine.Object):void;
            public static DestroyImmediate($obj: UnityEngine.Object, $allowDestroyingAssets: boolean):void;
            public static DestroyImmediate($obj: UnityEngine.Object):void;
            public static FindObjectsOfType($type: System.Type):System.Array$1<UnityEngine.Object>;
            public static DontDestroyOnLoad($target: UnityEngine.Object):void;
            public static FindObjectOfType($type: System.Type):UnityEngine.Object;
            public static op_Equality($x: UnityEngine.Object, $y: UnityEngine.Object):boolean;
            public static op_Inequality($x: UnityEngine.Object, $y: UnityEngine.Object):boolean;
            
        }
        class Transform extends UnityEngine.Component {
            public position: UnityEngine.Vector3;
            public localPosition: UnityEngine.Vector3;
            public eulerAngles: UnityEngine.Vector3;
            public localEulerAngles: UnityEngine.Vector3;
            public right: UnityEngine.Vector3;
            public up: UnityEngine.Vector3;
            public forward: UnityEngine.Vector3;
            public rotation: UnityEngine.Quaternion;
            public localRotation: UnityEngine.Quaternion;
            public localScale: UnityEngine.Vector3;
            public parent: UnityEngine.Transform;
            public worldToLocalMatrix: UnityEngine.Matrix4x4;
            public localToWorldMatrix: UnityEngine.Matrix4x4;
            public root: UnityEngine.Transform;
            public childCount: number;
            public lossyScale: UnityEngine.Vector3;
            public hasChanged: boolean;
            public hierarchyCapacity: number;
            public hierarchyCount: number;
            public SetParent($p: UnityEngine.Transform):void;
            public SetParent($parent: UnityEngine.Transform, $worldPositionStays: boolean):void;
            public SetPositionAndRotation($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):void;
            public Translate($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Space):void;
            public Translate($translation: UnityEngine.Vector3):void;
            public Translate($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Space):void;
            public Translate($x: number, $y: number, $z: number):void;
            public Translate($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Transform):void;
            public Translate($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Transform):void;
            public Rotate($eulers: UnityEngine.Vector3, $relativeTo: UnityEngine.Space):void;
            public Rotate($eulers: UnityEngine.Vector3):void;
            public Rotate($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space):void;
            public Rotate($xAngle: number, $yAngle: number, $zAngle: number):void;
            public Rotate($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space):void;
            public Rotate($axis: UnityEngine.Vector3, $angle: number):void;
            public RotateAround($point: UnityEngine.Vector3, $axis: UnityEngine.Vector3, $angle: number):void;
            public LookAt($target: UnityEngine.Transform, $worldUp: UnityEngine.Vector3):void;
            public LookAt($target: UnityEngine.Transform):void;
            public LookAt($worldPosition: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3):void;
            public LookAt($worldPosition: UnityEngine.Vector3):void;
            public TransformDirection($direction: UnityEngine.Vector3):UnityEngine.Vector3;
            public TransformDirection($x: number, $y: number, $z: number):UnityEngine.Vector3;
            public InverseTransformDirection($direction: UnityEngine.Vector3):UnityEngine.Vector3;
            public InverseTransformDirection($x: number, $y: number, $z: number):UnityEngine.Vector3;
            public TransformVector($vector: UnityEngine.Vector3):UnityEngine.Vector3;
            public TransformVector($x: number, $y: number, $z: number):UnityEngine.Vector3;
            public InverseTransformVector($vector: UnityEngine.Vector3):UnityEngine.Vector3;
            public InverseTransformVector($x: number, $y: number, $z: number):UnityEngine.Vector3;
            public TransformPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            public TransformPoint($x: number, $y: number, $z: number):UnityEngine.Vector3;
            public InverseTransformPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            public InverseTransformPoint($x: number, $y: number, $z: number):UnityEngine.Vector3;
            public DetachChildren():void;
            public SetAsFirstSibling():void;
            public SetAsLastSibling():void;
            public SetSiblingIndex($index: number):void;
            public GetSiblingIndex():number;
            public Find($n: string):UnityEngine.Transform;
            public IsChildOf($parent: UnityEngine.Transform):boolean;
            public GetEnumerator():System.Collections.IEnumerator;
            public GetChild($index: number):UnityEngine.Transform;
            
        }
        class BoxCollider extends UnityEngine.Collider {
            public center: UnityEngine.Vector3;
            public size: UnityEngine.Vector3;
            public constructor();
            
        }
        class Collider extends UnityEngine.Component {
            
        }
        class GameObject extends UnityEngine.Object {
            public transform: UnityEngine.Transform;
            public layer: number;
            public activeSelf: boolean;
            public activeInHierarchy: boolean;
            public isStatic: boolean;
            public tag: string;
            public scene: UnityEngine.SceneManagement.Scene;
            public gameObject: UnityEngine.GameObject;
            public constructor($name: string);
            public constructor();
            public constructor($name: string, ...components: System.Type[]);
            public static CreatePrimitive($type: UnityEngine.PrimitiveType):UnityEngine.GameObject;
            public GetComponent($type: System.Type):UnityEngine.Component;
            public GetComponent($type: string):UnityEngine.Component;
            public GetComponentInChildren($type: System.Type, $includeInactive: boolean):UnityEngine.Component;
            public GetComponentInChildren($type: System.Type):UnityEngine.Component;
            public GetComponentInParent($type: System.Type):UnityEngine.Component;
            public GetComponents($type: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponents($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>):void;
            public GetComponentsInChildren($type: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponentsInChildren($type: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            public GetComponentsInParent($type: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponentsInParent($type: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            public static FindWithTag($tag: string):UnityEngine.GameObject;
            public SendMessageUpwards($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            public SendMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            public BroadcastMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            public AddComponent($componentType: System.Type):UnityEngine.Component;
            public SetActive($value: boolean):void;
            public CompareTag($tag: string):boolean;
            public static FindGameObjectWithTag($tag: string):UnityEngine.GameObject;
            public static FindGameObjectsWithTag($tag: string):System.Array$1<UnityEngine.GameObject>;
            public SendMessageUpwards($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            public SendMessageUpwards($methodName: string, $value: any):void;
            public SendMessageUpwards($methodName: string):void;
            public SendMessage($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            public SendMessage($methodName: string, $value: any):void;
            public SendMessage($methodName: string):void;
            public BroadcastMessage($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions):void;
            public BroadcastMessage($methodName: string, $parameter: any):void;
            public BroadcastMessage($methodName: string):void;
            public static Find($name: string):UnityEngine.GameObject;
            
        }
        class LayerMask extends System.ValueType {
            
        }
        class ParticleSystem extends UnityEngine.Component {
            public isPlaying: boolean;
            public isEmitting: boolean;
            public isStopped: boolean;
            public isPaused: boolean;
            public particleCount: number;
            public time: number;
            public randomSeed: number;
            public useAutoRandomSeed: boolean;
            public proceduralSimulationSupported: boolean;
            public main: UnityEngine.ParticleSystem.MainModule;
            public emission: UnityEngine.ParticleSystem.EmissionModule;
            public shape: UnityEngine.ParticleSystem.ShapeModule;
            public velocityOverLifetime: UnityEngine.ParticleSystem.VelocityOverLifetimeModule;
            public limitVelocityOverLifetime: UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule;
            public inheritVelocity: UnityEngine.ParticleSystem.InheritVelocityModule;
            public forceOverLifetime: UnityEngine.ParticleSystem.ForceOverLifetimeModule;
            public colorOverLifetime: UnityEngine.ParticleSystem.ColorOverLifetimeModule;
            public colorBySpeed: UnityEngine.ParticleSystem.ColorBySpeedModule;
            public sizeOverLifetime: UnityEngine.ParticleSystem.SizeOverLifetimeModule;
            public sizeBySpeed: UnityEngine.ParticleSystem.SizeBySpeedModule;
            public rotationOverLifetime: UnityEngine.ParticleSystem.RotationOverLifetimeModule;
            public rotationBySpeed: UnityEngine.ParticleSystem.RotationBySpeedModule;
            public externalForces: UnityEngine.ParticleSystem.ExternalForcesModule;
            public noise: UnityEngine.ParticleSystem.NoiseModule;
            public collision: UnityEngine.ParticleSystem.CollisionModule;
            public trigger: UnityEngine.ParticleSystem.TriggerModule;
            public subEmitters: UnityEngine.ParticleSystem.SubEmittersModule;
            public textureSheetAnimation: UnityEngine.ParticleSystem.TextureSheetAnimationModule;
            public lights: UnityEngine.ParticleSystem.LightsModule;
            public trails: UnityEngine.ParticleSystem.TrailModule;
            public customData: UnityEngine.ParticleSystem.CustomDataModule;
            public constructor();
            public SetCustomParticleData($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData):void;
            public GetCustomParticleData($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData):number;
            public TriggerSubEmitter($subEmitterIndex: number):void;
            public TriggerSubEmitter($subEmitterIndex: number, $particle: $Ref<UnityEngine.ParticleSystem.Particle>):void;
            public TriggerSubEmitter($subEmitterIndex: number, $particles: System.Collections.Generic.List$1<UnityEngine.ParticleSystem.Particle>):void;
            public SetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number):void;
            public SetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number):void;
            public SetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>):void;
            public GetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number):number;
            public GetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number):number;
            public GetParticles($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>):number;
            public Simulate($t: number, $withChildren: boolean, $restart: boolean, $fixedTimeStep: boolean):void;
            public Simulate($t: number, $withChildren: boolean, $restart: boolean):void;
            public Simulate($t: number, $withChildren: boolean):void;
            public Simulate($t: number):void;
            public Play($withChildren: boolean):void;
            public Play():void;
            public Pause($withChildren: boolean):void;
            public Pause():void;
            public Stop($withChildren: boolean, $stopBehavior: UnityEngine.ParticleSystemStopBehavior):void;
            public Stop($withChildren: boolean):void;
            public Stop():void;
            public Clear($withChildren: boolean):void;
            public Clear():void;
            public IsAlive($withChildren: boolean):boolean;
            public IsAlive():boolean;
            public Emit($count: number):void;
            public Emit($emitParams: UnityEngine.ParticleSystem.EmitParams, $count: number):void;
            public static ResetPreMappedBufferMemory():void;
            
        }
        class Color extends System.ValueType {
            
        }
        class Mathf extends System.ValueType {
            public static PI: number;
            public static Infinity: number;
            public static NegativeInfinity: number;
            public static Deg2Rad: number;
            public static Rad2Deg: number;
            public static Epsilon: number;
            public static ClosestPowerOfTwo($value: number):number;
            public static IsPowerOfTwo($value: number):boolean;
            public static NextPowerOfTwo($value: number):number;
            public static GammaToLinearSpace($value: number):number;
            public static LinearToGammaSpace($value: number):number;
            public static CorrelatedColorTemperatureToRGB($kelvin: number):UnityEngine.Color;
            public static FloatToHalf($val: number):number;
            public static HalfToFloat($val: number):number;
            public static PerlinNoise($x: number, $y: number):number;
            public static Sin($f: number):number;
            public static Cos($f: number):number;
            public static Tan($f: number):number;
            public static Asin($f: number):number;
            public static Acos($f: number):number;
            public static Atan($f: number):number;
            public static Atan2($y: number, $x: number):number;
            public static Sqrt($f: number):number;
            public static Abs($f: number):number;
            public static Abs($value: number):number;
            public static Min($a: number, $b: number):number;
            public static Min(...values: number[]):number;
            public static Min($a: number, $b: number):number;
            public static Min(...values: number[]):number;
            public static Max($a: number, $b: number):number;
            public static Max(...values: number[]):number;
            public static Max($a: number, $b: number):number;
            public static Max(...values: number[]):number;
            public static Pow($f: number, $p: number):number;
            public static Exp($power: number):number;
            public static Log($f: number, $p: number):number;
            public static Log($f: number):number;
            public static Log10($f: number):number;
            public static Ceil($f: number):number;
            public static Floor($f: number):number;
            public static Round($f: number):number;
            public static CeilToInt($f: number):number;
            public static FloorToInt($f: number):number;
            public static RoundToInt($f: number):number;
            public static Sign($f: number):number;
            public static Clamp($value: number, $min: number, $max: number):number;
            public static Clamp($value: number, $min: number, $max: number):number;
            public static Clamp01($value: number):number;
            public static Lerp($a: number, $b: number, $t: number):number;
            public static LerpUnclamped($a: number, $b: number, $t: number):number;
            public static LerpAngle($a: number, $b: number, $t: number):number;
            public static MoveTowards($current: number, $target: number, $maxDelta: number):number;
            public static MoveTowardsAngle($current: number, $target: number, $maxDelta: number):number;
            public static SmoothStep($from: number, $to: number, $t: number):number;
            public static Gamma($value: number, $absmax: number, $gamma: number):number;
            public static Approximately($a: number, $b: number):boolean;
            public static SmoothDamp($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number):number;
            public static SmoothDamp($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number):number;
            public static SmoothDamp($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number, $deltaTime: number):number;
            public static SmoothDampAngle($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number):number;
            public static SmoothDampAngle($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number):number;
            public static SmoothDampAngle($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number, $deltaTime: number):number;
            public static Repeat($t: number, $length: number):number;
            public static PingPong($t: number, $length: number):number;
            public static InverseLerp($a: number, $b: number, $value: number):number;
            public static DeltaAngle($current: number, $target: number):number;
            
        }
        class Debug extends System.Object {
            public static unityLogger: UnityEngine.ILogger;
            public static developerConsoleVisible: boolean;
            public static isDebugBuild: boolean;
            public constructor();
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number):void;
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color):void;
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3):void;
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean):void;
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number):void;
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color):void;
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3):void;
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean):void;
            public static Break():void;
            public static DebugBreak():void;
            public static Log($message: any):void;
            public static Log($message: any, $context: UnityEngine.Object):void;
            public static LogFormat($format: string, ...args: any[]):void;
            public static LogFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            public static LogError($message: any):void;
            public static LogError($message: any, $context: UnityEngine.Object):void;
            public static LogErrorFormat($format: string, ...args: any[]):void;
            public static LogErrorFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            public static ClearDeveloperConsole():void;
            public static LogException($exception: System.Exception):void;
            public static LogException($exception: System.Exception, $context: UnityEngine.Object):void;
            public static LogWarning($message: any):void;
            public static LogWarning($message: any, $context: UnityEngine.Object):void;
            public static LogWarningFormat($format: string, ...args: any[]):void;
            public static LogWarningFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            public static Assert($condition: boolean):void;
            public static Assert($condition: boolean, $context: UnityEngine.Object):void;
            public static Assert($condition: boolean, $message: any):void;
            public static Assert($condition: boolean, $message: string):void;
            public static Assert($condition: boolean, $message: any, $context: UnityEngine.Object):void;
            public static Assert($condition: boolean, $message: string, $context: UnityEngine.Object):void;
            public static AssertFormat($condition: boolean, $format: string, ...args: any[]):void;
            public static AssertFormat($condition: boolean, $context: UnityEngine.Object, $format: string, ...args: any[]):void;
            public static LogAssertion($message: any):void;
            public static LogAssertion($message: any, $context: UnityEngine.Object):void;
            public static LogAssertionFormat($format: string, ...args: any[]):void;
            public static LogAssertionFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            
        }
        interface ILogger {
            
        }
        class Vector3 extends System.ValueType {
            public static kEpsilon: number;
            public static kEpsilonNormalSqrt: number;
            public x: number;
            public y: number;
            public z: number;
            public normalized: UnityEngine.Vector3;
            public magnitude: number;
            public sqrMagnitude: number;
            public static zero: UnityEngine.Vector3;
            public static one: UnityEngine.Vector3;
            public static forward: UnityEngine.Vector3;
            public static back: UnityEngine.Vector3;
            public static up: UnityEngine.Vector3;
            public static down: UnityEngine.Vector3;
            public static left: UnityEngine.Vector3;
            public static right: UnityEngine.Vector3;
            public static positiveInfinity: UnityEngine.Vector3;
            public static negativeInfinity: UnityEngine.Vector3;
            public constructor($x: number, $y: number, $z: number);
            public constructor($x: number, $y: number);
            public static Slerp($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number):UnityEngine.Vector3;
            public static SlerpUnclamped($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number):UnityEngine.Vector3;
            public static OrthoNormalize($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>):void;
            public static OrthoNormalize($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>, $binormal: $Ref<UnityEngine.Vector3>):void;
            public static RotateTowards($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxRadiansDelta: number, $maxMagnitudeDelta: number):UnityEngine.Vector3;
            public static Lerp($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number):UnityEngine.Vector3;
            public static LerpUnclamped($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number):UnityEngine.Vector3;
            public static MoveTowards($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxDistanceDelta: number):UnityEngine.Vector3;
            public static SmoothDamp($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number):UnityEngine.Vector3;
            public static SmoothDamp($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number):UnityEngine.Vector3;
            public static SmoothDamp($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number, $deltaTime: number):UnityEngine.Vector3;
            public get_Item($index: number):number;
            public set_Item($index: number, $value: number):void;
            public Set($newX: number, $newY: number, $newZ: number):void;
            public static Scale($a: UnityEngine.Vector3, $b: UnityEngine.Vector3):UnityEngine.Vector3;
            public Scale($scale: UnityEngine.Vector3):void;
            public static Cross($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            public Equals($other: any):boolean;
            public Equals($other: UnityEngine.Vector3):boolean;
            public static Reflect($inDirection: UnityEngine.Vector3, $inNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            public static Normalize($value: UnityEngine.Vector3):UnityEngine.Vector3;
            public Normalize():void;
            public static Dot($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):number;
            public static Project($vector: UnityEngine.Vector3, $onNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            public static ProjectOnPlane($vector: UnityEngine.Vector3, $planeNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            public static Angle($from: UnityEngine.Vector3, $to: UnityEngine.Vector3):number;
            public static SignedAngle($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $axis: UnityEngine.Vector3):number;
            public static Distance($a: UnityEngine.Vector3, $b: UnityEngine.Vector3):number;
            public static ClampMagnitude($vector: UnityEngine.Vector3, $maxLength: number):UnityEngine.Vector3;
            public static Magnitude($vector: UnityEngine.Vector3):number;
            public static SqrMagnitude($vector: UnityEngine.Vector3):number;
            public static Min($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            public static Max($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            public static op_Addition($a: UnityEngine.Vector3, $b: UnityEngine.Vector3):UnityEngine.Vector3;
            public static op_Subtraction($a: UnityEngine.Vector3, $b: UnityEngine.Vector3):UnityEngine.Vector3;
            public static op_UnaryNegation($a: UnityEngine.Vector3):UnityEngine.Vector3;
            public static op_Multiply($a: UnityEngine.Vector3, $d: number):UnityEngine.Vector3;
            public static op_Multiply($d: number, $a: UnityEngine.Vector3):UnityEngine.Vector3;
            public static op_Division($a: UnityEngine.Vector3, $d: number):UnityEngine.Vector3;
            public static op_Equality($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):boolean;
            public static op_Inequality($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3):boolean;
            public ToString():string;
            public ToString($format: string):string;
            
        }
        class Time extends System.Object {
            public static time: number;
            public static timeSinceLevelLoad: number;
            public static deltaTime: number;
            public static fixedTime: number;
            public static unscaledTime: number;
            public static fixedUnscaledTime: number;
            public static unscaledDeltaTime: number;
            public static fixedUnscaledDeltaTime: number;
            public static fixedDeltaTime: number;
            public static maximumDeltaTime: number;
            public static smoothDeltaTime: number;
            public static maximumParticleDeltaTime: number;
            public static timeScale: number;
            public static frameCount: number;
            public static renderedFrameCount: number;
            public static realtimeSinceStartup: number;
            public static captureFramerate: number;
            public static inFixedTimeStep: boolean;
            public constructor();
            
        }
        class Quaternion extends System.ValueType {
            
        }
        class Matrix4x4 extends System.ValueType {
            
        }
        enum Space { World = 0, Self = 1 }
        enum SendMessageOptions { RequireReceiver = 0, DontRequireReceiver = 1 }
        enum PrimitiveType { Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
        enum HideFlags { None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
        class Vector4 extends System.ValueType {
            
        }
        enum ParticleSystemCustomData { Custom1 = 0, Custom2 = 1 }
        class Color32 extends System.ValueType {
            
        }
        enum ParticleSystemSimulationSpace { Local = 0, World = 1, Custom = 2 }
        enum ParticleSystemScalingMode { Hierarchy = 0, Local = 1, Shape = 2 }
        enum ParticleSystemStopBehavior { StopEmittingAndClear = 0, StopEmitting = 1 }
        enum ParticleSystemEmitterVelocityMode { Transform = 0, Rigidbody = 1 }
        enum ParticleSystemStopAction { None = 0, Disable = 1, Destroy = 2, Callback = 3 }
        enum ParticleSystemCullingMode { Automatic = 0, PauseAndCatchup = 1, Pause = 2, AlwaysSimulate = 3 }
        enum ParticleSystemRingBufferMode { Disabled = 0, PauseUntilReplaced = 1, LoopUntilReplaced = 2 }
        class Vector2 extends System.ValueType {
            
        }
        class Canvas extends UnityEngine.Behaviour {
            public renderMode: UnityEngine.RenderMode;
            public isRootCanvas: boolean;
            public pixelRect: UnityEngine.Rect;
            public scaleFactor: number;
            public referencePixelsPerUnit: number;
            public overridePixelPerfect: boolean;
            public pixelPerfect: boolean;
            public planeDistance: number;
            public renderOrder: number;
            public overrideSorting: boolean;
            public sortingOrder: number;
            public targetDisplay: number;
            public sortingLayerID: number;
            public cachedSortingLayerValue: number;
            public additionalShaderChannels: UnityEngine.AdditionalCanvasShaderChannels;
            public sortingLayerName: string;
            public rootCanvas: UnityEngine.Canvas;
            public worldCamera: UnityEngine.Camera;
            public normalizedSortingGridSize: number;
            public constructor();
            public static add_willRenderCanvases($value: UnityEngine.Canvas.WillRenderCanvases):void;
            public static remove_willRenderCanvases($value: UnityEngine.Canvas.WillRenderCanvases):void;
            public static GetDefaultCanvasMaterial():UnityEngine.Material;
            public static GetETC1SupportedCanvasMaterial():UnityEngine.Material;
            public static ForceUpdateCanvases():void;
            
        }
        enum RenderMode { ScreenSpaceOverlay = 0, ScreenSpaceCamera = 1, WorldSpace = 2 }
        class Rect extends System.ValueType {
            
        }
        enum AdditionalCanvasShaderChannels { None = 0, TexCoord1 = 1, TexCoord2 = 2, TexCoord3 = 4, Normal = 8, Tangent = 16 }
        class Camera extends UnityEngine.Behaviour {
            public static onPreCull: UnityEngine.Camera.CameraCallback;
            public static onPreRender: UnityEngine.Camera.CameraCallback;
            public static onPostRender: UnityEngine.Camera.CameraCallback;
            public nearClipPlane: number;
            public farClipPlane: number;
            public fieldOfView: number;
            public renderingPath: UnityEngine.RenderingPath;
            public actualRenderingPath: UnityEngine.RenderingPath;
            public allowHDR: boolean;
            public allowMSAA: boolean;
            public allowDynamicResolution: boolean;
            public forceIntoRenderTexture: boolean;
            public orthographicSize: number;
            public orthographic: boolean;
            public opaqueSortMode: UnityEngine.Rendering.OpaqueSortMode;
            public transparencySortMode: UnityEngine.TransparencySortMode;
            public transparencySortAxis: UnityEngine.Vector3;
            public depth: number;
            public aspect: number;
            public velocity: UnityEngine.Vector3;
            public cullingMask: number;
            public eventMask: number;
            public layerCullSpherical: boolean;
            public cameraType: UnityEngine.CameraType;
            public layerCullDistances: System.Array$1<number>;
            public useOcclusionCulling: boolean;
            public cullingMatrix: UnityEngine.Matrix4x4;
            public backgroundColor: UnityEngine.Color;
            public clearFlags: UnityEngine.CameraClearFlags;
            public depthTextureMode: UnityEngine.DepthTextureMode;
            public clearStencilAfterLightingPass: boolean;
            public usePhysicalProperties: boolean;
            public sensorSize: UnityEngine.Vector2;
            public lensShift: UnityEngine.Vector2;
            public focalLength: number;
            public gateFit: UnityEngine.Camera.GateFitMode;
            public rect: UnityEngine.Rect;
            public pixelRect: UnityEngine.Rect;
            public pixelWidth: number;
            public pixelHeight: number;
            public scaledPixelWidth: number;
            public scaledPixelHeight: number;
            public targetTexture: UnityEngine.RenderTexture;
            public activeTexture: UnityEngine.RenderTexture;
            public targetDisplay: number;
            public cameraToWorldMatrix: UnityEngine.Matrix4x4;
            public worldToCameraMatrix: UnityEngine.Matrix4x4;
            public projectionMatrix: UnityEngine.Matrix4x4;
            public nonJitteredProjectionMatrix: UnityEngine.Matrix4x4;
            public useJitteredProjectionMatrixForTransparentRendering: boolean;
            public previousViewProjectionMatrix: UnityEngine.Matrix4x4;
            public static main: UnityEngine.Camera;
            public static current: UnityEngine.Camera;
            public scene: UnityEngine.SceneManagement.Scene;
            public stereoEnabled: boolean;
            public stereoSeparation: number;
            public stereoConvergence: number;
            public areVRStereoViewMatricesWithinSingleCullTolerance: boolean;
            public stereoTargetEye: UnityEngine.StereoTargetEyeMask;
            public stereoActiveEye: UnityEngine.Camera.MonoOrStereoscopicEye;
            public static allCamerasCount: number;
            public static allCameras: System.Array$1<UnityEngine.Camera>;
            public commandBufferCount: number;
            public constructor();
            public Reset():void;
            public ResetTransparencySortSettings():void;
            public ResetAspect():void;
            public ResetCullingMatrix():void;
            public SetReplacementShader($shader: UnityEngine.Shader, $replacementTag: string):void;
            public ResetReplacementShader():void;
            public SetTargetBuffers($colorBuffer: UnityEngine.RenderBuffer, $depthBuffer: UnityEngine.RenderBuffer):void;
            public SetTargetBuffers($colorBuffer: System.Array$1<UnityEngine.RenderBuffer>, $depthBuffer: UnityEngine.RenderBuffer):void;
            public ResetWorldToCameraMatrix():void;
            public ResetProjectionMatrix():void;
            public CalculateObliqueMatrix($clipPlane: UnityEngine.Vector4):UnityEngine.Matrix4x4;
            public WorldToScreenPoint($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye):UnityEngine.Vector3;
            public WorldToViewportPoint($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye):UnityEngine.Vector3;
            public ViewportToWorldPoint($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye):UnityEngine.Vector3;
            public ScreenToWorldPoint($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye):UnityEngine.Vector3;
            public WorldToScreenPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            public WorldToViewportPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            public ViewportToWorldPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            public ScreenToWorldPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            public ScreenToViewportPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            public ViewportToScreenPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            public ViewportPointToRay($pos: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye):UnityEngine.Ray;
            public ViewportPointToRay($pos: UnityEngine.Vector3):UnityEngine.Ray;
            public ScreenPointToRay($pos: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye):UnityEngine.Ray;
            public ScreenPointToRay($pos: UnityEngine.Vector3):UnityEngine.Ray;
            public CalculateFrustumCorners($viewport: UnityEngine.Rect, $z: number, $eye: UnityEngine.Camera.MonoOrStereoscopicEye, $outCorners: System.Array$1<UnityEngine.Vector3>):void;
            public static CalculateProjectionMatrixFromPhysicalProperties($output: $Ref<UnityEngine.Matrix4x4>, $focalLength: number, $sensorSize: UnityEngine.Vector2, $lensShift: UnityEngine.Vector2, $nearClip: number, $farClip: number, $gateFitParameters?: UnityEngine.Camera.GateFitParameters):void;
            public static FocalLengthToFOV($focalLength: number, $sensorSize: number):number;
            public static FOVToFocalLength($fov: number, $sensorSize: number):number;
            public GetStereoNonJitteredProjectionMatrix($eye: UnityEngine.Camera.StereoscopicEye):UnityEngine.Matrix4x4;
            public GetStereoViewMatrix($eye: UnityEngine.Camera.StereoscopicEye):UnityEngine.Matrix4x4;
            public CopyStereoDeviceProjectionMatrixToNonJittered($eye: UnityEngine.Camera.StereoscopicEye):void;
            public GetStereoProjectionMatrix($eye: UnityEngine.Camera.StereoscopicEye):UnityEngine.Matrix4x4;
            public SetStereoProjectionMatrix($eye: UnityEngine.Camera.StereoscopicEye, $matrix: UnityEngine.Matrix4x4):void;
            public ResetStereoProjectionMatrices():void;
            public SetStereoViewMatrix($eye: UnityEngine.Camera.StereoscopicEye, $matrix: UnityEngine.Matrix4x4):void;
            public ResetStereoViewMatrices():void;
            public static GetAllCameras($cameras: System.Array$1<UnityEngine.Camera>):number;
            public RenderToCubemap($cubemap: UnityEngine.Cubemap, $faceMask: number):boolean;
            public RenderToCubemap($cubemap: UnityEngine.Cubemap):boolean;
            public RenderToCubemap($cubemap: UnityEngine.RenderTexture, $faceMask: number):boolean;
            public RenderToCubemap($cubemap: UnityEngine.RenderTexture):boolean;
            public RenderToCubemap($cubemap: UnityEngine.RenderTexture, $faceMask: number, $stereoEye: UnityEngine.Camera.MonoOrStereoscopicEye):boolean;
            public Render():void;
            public RenderWithShader($shader: UnityEngine.Shader, $replacementTag: string):void;
            public RenderDontRestore():void;
            public static SetupCurrent($cur: UnityEngine.Camera):void;
            public CopyFrom($other: UnityEngine.Camera):void;
            public RemoveCommandBuffers($evt: UnityEngine.Rendering.CameraEvent):void;
            public RemoveAllCommandBuffers():void;
            public AddCommandBuffer($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer):void;
            public AddCommandBufferAsync($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer, $queueType: UnityEngine.Rendering.ComputeQueueType):void;
            public RemoveCommandBuffer($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer):void;
            public GetCommandBuffers($evt: UnityEngine.Rendering.CameraEvent):System.Array$1<UnityEngine.Rendering.CommandBuffer>;
            
        }
        class Material extends UnityEngine.Object {
            
        }
        class Coroutine extends UnityEngine.YieldInstruction {
            
        }
        class YieldInstruction extends System.Object {
            
        }
        enum RenderingPath { UsePlayerSettings = -1, VertexLit = 0, Forward = 1, DeferredLighting = 2, DeferredShading = 3 }
        enum TransparencySortMode { Default = 0, Perspective = 1, Orthographic = 2, CustomAxis = 3 }
        enum CameraType { Game = 1, SceneView = 2, Preview = 4, VR = 8, Reflection = 16 }
        enum CameraClearFlags { Skybox = 1, Color = 2, SolidColor = 2, Depth = 3, Nothing = 4 }
        enum DepthTextureMode { None = 0, Depth = 1, DepthNormals = 2, MotionVectors = 4 }
        class Shader extends UnityEngine.Object {
            
        }
        class RenderTexture extends UnityEngine.Texture {
            
        }
        class Texture extends UnityEngine.Object {
            
        }
        class RenderBuffer extends System.ValueType {
            
        }
        class Ray extends System.ValueType {
            
        }
        enum StereoTargetEyeMask { None = 0, Left = 1, Right = 2, Both = 3 }
        class Cubemap extends UnityEngine.Texture {
            
        }
        class Physics extends System.Object {
            public static IgnoreRaycastLayer: number;
            public static DefaultRaycastLayers: number;
            public static AllLayers: number;
            public static gravity: UnityEngine.Vector3;
            public static defaultContactOffset: number;
            public static sleepThreshold: number;
            public static queriesHitTriggers: boolean;
            public static queriesHitBackfaces: boolean;
            public static bounceThreshold: number;
            public static defaultSolverIterations: number;
            public static defaultSolverVelocityIterations: number;
            public static defaultPhysicsScene: UnityEngine.PhysicsScene;
            public static autoSimulation: boolean;
            public static autoSyncTransforms: boolean;
            public static reuseCollisionCallbacks: boolean;
            public static interCollisionDistance: number;
            public static interCollisionStiffness: number;
            public static interCollisionSettingsToggle: boolean;
            public constructor();
            public static IgnoreCollision($collider1: UnityEngine.Collider, $collider2: UnityEngine.Collider, $ignore: boolean):void;
            public static IgnoreCollision($collider1: UnityEngine.Collider, $collider2: UnityEngine.Collider):void;
            public static IgnoreLayerCollision($layer1: number, $layer2: number, $ignore: boolean):void;
            public static IgnoreLayerCollision($layer1: number, $layer2: number):void;
            public static GetIgnoreLayerCollision($layer1: number, $layer2: number):boolean;
            public static Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public static Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number):boolean;
            public static Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number):boolean;
            public static Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3):boolean;
            public static Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public static Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number):boolean;
            public static Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number):boolean;
            public static Raycast($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>):boolean;
            public static Raycast($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public static Raycast($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number):boolean;
            public static Raycast($ray: UnityEngine.Ray, $maxDistance: number):boolean;
            public static Raycast($ray: UnityEngine.Ray):boolean;
            public static Raycast($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public static Raycast($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number):boolean;
            public static Raycast($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number):boolean;
            public static Raycast($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>):boolean;
            public static Linecast($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public static Linecast($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $layerMask: number):boolean;
            public static Linecast($start: UnityEngine.Vector3, $end: UnityEngine.Vector3):boolean;
            public static Linecast($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public static Linecast($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $layerMask: number):boolean;
            public static Linecast($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>):boolean;
            public static CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public static CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number):boolean;
            public static CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number):boolean;
            public static CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3):boolean;
            public static CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public static CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number):boolean;
            public static CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number):boolean;
            public static CapsuleCast($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>):boolean;
            public static SphereCast($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public static SphereCast($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number):boolean;
            public static SphereCast($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number):boolean;
            public static SphereCast($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>):boolean;
            public static SphereCast($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public static SphereCast($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number):boolean;
            public static SphereCast($ray: UnityEngine.Ray, $radius: number, $maxDistance: number):boolean;
            public static SphereCast($ray: UnityEngine.Ray, $radius: number):boolean;
            public static SphereCast($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public static SphereCast($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number):boolean;
            public static SphereCast($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number):boolean;
            public static SphereCast($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Ref<UnityEngine.RaycastHit>):boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number):boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number):boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion):boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3):boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number):boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number):boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion):boolean;
            public static BoxCast($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>):boolean;
            public static RaycastAll($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):System.Array$1<UnityEngine.RaycastHit>;
            public static RaycastAll($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number):System.Array$1<UnityEngine.RaycastHit>;
            public static RaycastAll($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number):System.Array$1<UnityEngine.RaycastHit>;
            public static RaycastAll($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3):System.Array$1<UnityEngine.RaycastHit>;
            public static RaycastAll($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):System.Array$1<UnityEngine.RaycastHit>;
            public static RaycastAll($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number):System.Array$1<UnityEngine.RaycastHit>;
            public static RaycastAll($ray: UnityEngine.Ray, $maxDistance: number):System.Array$1<UnityEngine.RaycastHit>;
            public static RaycastAll($ray: UnityEngine.Ray):System.Array$1<UnityEngine.RaycastHit>;
            public static RaycastNonAlloc($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):number;
            public static RaycastNonAlloc($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number):number;
            public static RaycastNonAlloc($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number):number;
            public static RaycastNonAlloc($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>):number;
            public static RaycastNonAlloc($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):number;
            public static RaycastNonAlloc($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number):number;
            public static RaycastNonAlloc($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number):number;
            public static RaycastNonAlloc($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>):number;
            public static CapsuleCastAll($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):System.Array$1<UnityEngine.RaycastHit>;
            public static CapsuleCastAll($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number):System.Array$1<UnityEngine.RaycastHit>;
            public static CapsuleCastAll($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number):System.Array$1<UnityEngine.RaycastHit>;
            public static CapsuleCastAll($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3):System.Array$1<UnityEngine.RaycastHit>;
            public static SphereCastAll($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):System.Array$1<UnityEngine.RaycastHit>;
            public static SphereCastAll($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number):System.Array$1<UnityEngine.RaycastHit>;
            public static SphereCastAll($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number):System.Array$1<UnityEngine.RaycastHit>;
            public static SphereCastAll($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3):System.Array$1<UnityEngine.RaycastHit>;
            public static SphereCastAll($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):System.Array$1<UnityEngine.RaycastHit>;
            public static SphereCastAll($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number):System.Array$1<UnityEngine.RaycastHit>;
            public static SphereCastAll($ray: UnityEngine.Ray, $radius: number, $maxDistance: number):System.Array$1<UnityEngine.RaycastHit>;
            public static SphereCastAll($ray: UnityEngine.Ray, $radius: number):System.Array$1<UnityEngine.RaycastHit>;
            public static OverlapCapsule($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):System.Array$1<UnityEngine.Collider>;
            public static OverlapCapsule($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $layerMask: number):System.Array$1<UnityEngine.Collider>;
            public static OverlapCapsule($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number):System.Array$1<UnityEngine.Collider>;
            public static OverlapSphere($position: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):System.Array$1<UnityEngine.Collider>;
            public static OverlapSphere($position: UnityEngine.Vector3, $radius: number, $layerMask: number):System.Array$1<UnityEngine.Collider>;
            public static OverlapSphere($position: UnityEngine.Vector3, $radius: number):System.Array$1<UnityEngine.Collider>;
            public static Simulate($step: number):void;
            public static SyncTransforms():void;
            public static ComputePenetration($colliderA: UnityEngine.Collider, $positionA: UnityEngine.Vector3, $rotationA: UnityEngine.Quaternion, $colliderB: UnityEngine.Collider, $positionB: UnityEngine.Vector3, $rotationB: UnityEngine.Quaternion, $direction: $Ref<UnityEngine.Vector3>, $distance: $Ref<number>):boolean;
            public static ClosestPoint($point: UnityEngine.Vector3, $collider: UnityEngine.Collider, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):UnityEngine.Vector3;
            public static OverlapSphereNonAlloc($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):number;
            public static OverlapSphereNonAlloc($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number):number;
            public static OverlapSphereNonAlloc($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>):number;
            public static CheckSphere($position: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public static CheckSphere($position: UnityEngine.Vector3, $radius: number, $layerMask: number):boolean;
            public static CheckSphere($position: UnityEngine.Vector3, $radius: number):boolean;
            public static CapsuleCastNonAlloc($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):number;
            public static CapsuleCastNonAlloc($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number):number;
            public static CapsuleCastNonAlloc($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number):number;
            public static CapsuleCastNonAlloc($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>):number;
            public static SphereCastNonAlloc($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):number;
            public static SphereCastNonAlloc($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number):number;
            public static SphereCastNonAlloc($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number):number;
            public static SphereCastNonAlloc($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>):number;
            public static SphereCastNonAlloc($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):number;
            public static SphereCastNonAlloc($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number):number;
            public static SphereCastNonAlloc($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number):number;
            public static SphereCastNonAlloc($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>):number;
            public static CheckCapsule($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public static CheckCapsule($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $radius: number, $layerMask: number):boolean;
            public static CheckCapsule($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $radius: number):boolean;
            public static CheckBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layermask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public static CheckBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layerMask: number):boolean;
            public static CheckBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion):boolean;
            public static CheckBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3):boolean;
            public static OverlapBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):System.Array$1<UnityEngine.Collider>;
            public static OverlapBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layerMask: number):System.Array$1<UnityEngine.Collider>;
            public static OverlapBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion):System.Array$1<UnityEngine.Collider>;
            public static OverlapBox($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3):System.Array$1<UnityEngine.Collider>;
            public static OverlapBoxNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion, $mask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):number;
            public static OverlapBoxNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion, $mask: number):number;
            public static OverlapBoxNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion):number;
            public static OverlapBoxNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>):number;
            public static BoxCastNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):number;
            public static BoxCastNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion):number;
            public static BoxCastNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number):number;
            public static BoxCastNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number):number;
            public static BoxCastNonAlloc($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>):number;
            public static BoxCastAll($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):System.Array$1<UnityEngine.RaycastHit>;
            public static BoxCastAll($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number):System.Array$1<UnityEngine.RaycastHit>;
            public static BoxCastAll($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number):System.Array$1<UnityEngine.RaycastHit>;
            public static BoxCastAll($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion):System.Array$1<UnityEngine.RaycastHit>;
            public static BoxCastAll($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3):System.Array$1<UnityEngine.RaycastHit>;
            public static OverlapCapsuleNonAlloc($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):number;
            public static OverlapCapsuleNonAlloc($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number):number;
            public static OverlapCapsuleNonAlloc($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>):number;
            public static RebuildBroadphaseRegions($worldBounds: UnityEngine.Bounds, $subdivisions: number):void;
            
        }
        class PhysicsScene extends System.ValueType {
            
        }
        enum QueryTriggerInteraction { UseGlobal = 0, Ignore = 1, Collide = 2 }
        class RaycastHit extends System.ValueType {
            
        }
        class Bounds extends System.ValueType {
            
        }
        class Rigidbody extends UnityEngine.Component {
            public velocity: UnityEngine.Vector3;
            public angularVelocity: UnityEngine.Vector3;
            public drag: number;
            public angularDrag: number;
            public mass: number;
            public useGravity: boolean;
            public maxDepenetrationVelocity: number;
            public isKinematic: boolean;
            public freezeRotation: boolean;
            public constraints: UnityEngine.RigidbodyConstraints;
            public collisionDetectionMode: UnityEngine.CollisionDetectionMode;
            public centerOfMass: UnityEngine.Vector3;
            public worldCenterOfMass: UnityEngine.Vector3;
            public inertiaTensorRotation: UnityEngine.Quaternion;
            public inertiaTensor: UnityEngine.Vector3;
            public detectCollisions: boolean;
            public position: UnityEngine.Vector3;
            public rotation: UnityEngine.Quaternion;
            public interpolation: UnityEngine.RigidbodyInterpolation;
            public solverIterations: number;
            public sleepThreshold: number;
            public maxAngularVelocity: number;
            public solverVelocityIterations: number;
            public constructor();
            public SetDensity($density: number):void;
            public MovePosition($position: UnityEngine.Vector3):void;
            public MoveRotation($rot: UnityEngine.Quaternion):void;
            public Sleep():void;
            public IsSleeping():boolean;
            public WakeUp():void;
            public ResetCenterOfMass():void;
            public ResetInertiaTensor():void;
            public GetRelativePointVelocity($relativePoint: UnityEngine.Vector3):UnityEngine.Vector3;
            public GetPointVelocity($worldPoint: UnityEngine.Vector3):UnityEngine.Vector3;
            public AddForce($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode):void;
            public AddForce($force: UnityEngine.Vector3):void;
            public AddForce($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode):void;
            public AddForce($x: number, $y: number, $z: number):void;
            public AddRelativeForce($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode):void;
            public AddRelativeForce($force: UnityEngine.Vector3):void;
            public AddRelativeForce($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode):void;
            public AddRelativeForce($x: number, $y: number, $z: number):void;
            public AddTorque($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode):void;
            public AddTorque($torque: UnityEngine.Vector3):void;
            public AddTorque($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode):void;
            public AddTorque($x: number, $y: number, $z: number):void;
            public AddRelativeTorque($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode):void;
            public AddRelativeTorque($torque: UnityEngine.Vector3):void;
            public AddRelativeTorque($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode):void;
            public AddRelativeTorque($x: number, $y: number, $z: number):void;
            public AddForceAtPosition($force: UnityEngine.Vector3, $position: UnityEngine.Vector3, $mode: UnityEngine.ForceMode):void;
            public AddForceAtPosition($force: UnityEngine.Vector3, $position: UnityEngine.Vector3):void;
            public AddExplosionForce($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number, $upwardsModifier: number, $mode: UnityEngine.ForceMode):void;
            public AddExplosionForce($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number, $upwardsModifier: number):void;
            public AddExplosionForce($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number):void;
            public ClosestPointOnBounds($position: UnityEngine.Vector3):UnityEngine.Vector3;
            public SweepTest($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):boolean;
            public SweepTest($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number):boolean;
            public SweepTest($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>):boolean;
            public SweepTestAll($direction: UnityEngine.Vector3, $maxDistance: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction):System.Array$1<UnityEngine.RaycastHit>;
            public SweepTestAll($direction: UnityEngine.Vector3, $maxDistance: number):System.Array$1<UnityEngine.RaycastHit>;
            public SweepTestAll($direction: UnityEngine.Vector3):System.Array$1<UnityEngine.RaycastHit>;
            
        }
        enum RigidbodyConstraints { None = 0, FreezePositionX = 2, FreezePositionY = 4, FreezePositionZ = 8, FreezeRotationX = 16, FreezeRotationY = 32, FreezeRotationZ = 64, FreezePosition = 14, FreezeRotation = 112, FreezeAll = 126 }
        enum CollisionDetectionMode { Discrete = 0, Continuous = 1, ContinuousDynamic = 2, ContinuousSpeculative = 3 }
        enum RigidbodyInterpolation { None = 0, Interpolate = 1, Extrapolate = 2 }
        enum ForceMode { Force = 0, Acceleration = 5, Impulse = 1, VelocityChange = 2 }
        class AudioSource extends UnityEngine.AudioBehaviour {
            public volume: number;
            public pitch: number;
            public time: number;
            public timeSamples: number;
            public clip: UnityEngine.AudioClip;
            public outputAudioMixerGroup: UnityEngine.Audio.AudioMixerGroup;
            public isPlaying: boolean;
            public isVirtual: boolean;
            public loop: boolean;
            public ignoreListenerVolume: boolean;
            public playOnAwake: boolean;
            public ignoreListenerPause: boolean;
            public velocityUpdateMode: UnityEngine.AudioVelocityUpdateMode;
            public panStereo: number;
            public spatialBlend: number;
            public spatialize: boolean;
            public spatializePostEffects: boolean;
            public reverbZoneMix: number;
            public bypassEffects: boolean;
            public bypassListenerEffects: boolean;
            public bypassReverbZones: boolean;
            public dopplerLevel: number;
            public spread: number;
            public priority: number;
            public mute: boolean;
            public minDistance: number;
            public maxDistance: number;
            public rolloffMode: UnityEngine.AudioRolloffMode;
            public constructor();
            public Play($delay: bigint):void;
            public Play():void;
            public PlayDelayed($delay: number):void;
            public PlayScheduled($time: number):void;
            public SetScheduledStartTime($time: number):void;
            public SetScheduledEndTime($time: number):void;
            public Stop():void;
            public Pause():void;
            public UnPause():void;
            public PlayOneShot($clip: UnityEngine.AudioClip):void;
            public PlayOneShot($clip: UnityEngine.AudioClip, $volumeScale: number):void;
            public static PlayClipAtPoint($clip: UnityEngine.AudioClip, $position: UnityEngine.Vector3):void;
            public static PlayClipAtPoint($clip: UnityEngine.AudioClip, $position: UnityEngine.Vector3, $volume: number):void;
            public SetCustomCurve($type: UnityEngine.AudioSourceCurveType, $curve: UnityEngine.AnimationCurve):void;
            public GetCustomCurve($type: UnityEngine.AudioSourceCurveType):UnityEngine.AnimationCurve;
            public GetOutputData($samples: System.Array$1<number>, $channel: number):void;
            public GetSpectrumData($samples: System.Array$1<number>, $channel: number, $window: UnityEngine.FFTWindow):void;
            public SetSpatializerFloat($index: number, $value: number):boolean;
            public GetSpatializerFloat($index: number, $value: $Ref<number>):boolean;
            public SetAmbisonicDecoderFloat($index: number, $value: number):boolean;
            public GetAmbisonicDecoderFloat($index: number, $value: $Ref<number>):boolean;
            
        }
        class AudioBehaviour extends UnityEngine.Behaviour {
            
        }
        class AudioClip extends UnityEngine.Object {
            
        }
        enum AudioVelocityUpdateMode { Auto = 0, Fixed = 1, Dynamic = 2 }
        enum AudioSourceCurveType { CustomRolloff = 0, SpatialBlend = 1, ReverbZoneMix = 2, Spread = 3 }
        class AnimationCurve extends System.Object {
            
        }
        enum AudioRolloffMode { Logarithmic = 0, Linear = 1, Custom = 2 }
        enum FFTWindow { Rectangular = 0, Triangle = 1, Hamming = 2, Hanning = 3, Blackman = 4, BlackmanHarris = 5 }
        class Input extends System.Object {
            public static simulateMouseWithTouches: boolean;
            public static anyKey: boolean;
            public static anyKeyDown: boolean;
            public static inputString: string;
            public static mousePosition: UnityEngine.Vector3;
            public static mouseScrollDelta: UnityEngine.Vector2;
            public static imeCompositionMode: UnityEngine.IMECompositionMode;
            public static compositionString: string;
            public static imeIsSelected: boolean;
            public static compositionCursorPos: UnityEngine.Vector2;
            public static mousePresent: boolean;
            public static touchCount: number;
            public static touchPressureSupported: boolean;
            public static stylusTouchSupported: boolean;
            public static touchSupported: boolean;
            public static multiTouchEnabled: boolean;
            public static deviceOrientation: UnityEngine.DeviceOrientation;
            public static acceleration: UnityEngine.Vector3;
            public static compensateSensors: boolean;
            public static accelerationEventCount: number;
            public static backButtonLeavesApp: boolean;
            public static location: UnityEngine.LocationService;
            public static compass: UnityEngine.Compass;
            public static gyro: UnityEngine.Gyroscope;
            public static touches: System.Array$1<UnityEngine.Touch>;
            public static accelerationEvents: System.Array$1<UnityEngine.AccelerationEvent>;
            public constructor();
            public static GetAxis($axisName: string):number;
            public static GetAxisRaw($axisName: string):number;
            public static GetButton($buttonName: string):boolean;
            public static GetButtonDown($buttonName: string):boolean;
            public static GetButtonUp($buttonName: string):boolean;
            public static GetMouseButton($button: number):boolean;
            public static GetMouseButtonDown($button: number):boolean;
            public static GetMouseButtonUp($button: number):boolean;
            public static ResetInputAxes():void;
            public static IsJoystickPreconfigured($joystickName: string):boolean;
            public static GetJoystickNames():System.Array$1<string>;
            public static GetTouch($index: number):UnityEngine.Touch;
            public static GetAccelerationEvent($index: number):UnityEngine.AccelerationEvent;
            public static GetKey($key: UnityEngine.KeyCode):boolean;
            public static GetKey($name: string):boolean;
            public static GetKeyUp($key: UnityEngine.KeyCode):boolean;
            public static GetKeyUp($name: string):boolean;
            public static GetKeyDown($key: UnityEngine.KeyCode):boolean;
            public static GetKeyDown($name: string):boolean;
            
        }
        class Touch extends System.ValueType {
            
        }
        class AccelerationEvent extends System.ValueType {
            
        }
        enum KeyCode { None = 0, Backspace = 8, Delete = 127, Tab = 9, Clear = 12, Return = 13, Pause = 19, Escape = 27, Space = 32, Keypad0 = 256, Keypad1 = 257, Keypad2 = 258, Keypad3 = 259, Keypad4 = 260, Keypad5 = 261, Keypad6 = 262, Keypad7 = 263, Keypad8 = 264, Keypad9 = 265, KeypadPeriod = 266, KeypadDivide = 267, KeypadMultiply = 268, KeypadMinus = 269, KeypadPlus = 270, KeypadEnter = 271, KeypadEquals = 272, UpArrow = 273, DownArrow = 274, RightArrow = 275, LeftArrow = 276, Insert = 277, Home = 278, End = 279, PageUp = 280, PageDown = 281, F1 = 282, F2 = 283, F3 = 284, F4 = 285, F5 = 286, F6 = 287, F7 = 288, F8 = 289, F9 = 290, F10 = 291, F11 = 292, F12 = 293, F13 = 294, F14 = 295, F15 = 296, Alpha0 = 48, Alpha1 = 49, Alpha2 = 50, Alpha3 = 51, Alpha4 = 52, Alpha5 = 53, Alpha6 = 54, Alpha7 = 55, Alpha8 = 56, Alpha9 = 57, Exclaim = 33, DoubleQuote = 34, Hash = 35, Dollar = 36, Percent = 37, Ampersand = 38, Quote = 39, LeftParen = 40, RightParen = 41, Asterisk = 42, Plus = 43, Comma = 44, Minus = 45, Period = 46, Slash = 47, Colon = 58, Semicolon = 59, Less = 60, Equals = 61, Greater = 62, Question = 63, At = 64, LeftBracket = 91, Backslash = 92, RightBracket = 93, Caret = 94, Underscore = 95, BackQuote = 96, A = 97, B = 98, C = 99, D = 100, E = 101, F = 102, G = 103, H = 104, I = 105, J = 106, K = 107, L = 108, M = 109, N = 110, O = 111, P = 112, Q = 113, R = 114, S = 115, T = 116, U = 117, V = 118, W = 119, X = 120, Y = 121, Z = 122, LeftCurlyBracket = 123, Pipe = 124, RightCurlyBracket = 125, Tilde = 126, Numlock = 300, CapsLock = 301, ScrollLock = 302, RightShift = 303, LeftShift = 304, RightControl = 305, LeftControl = 306, RightAlt = 307, LeftAlt = 308, LeftCommand = 310, LeftApple = 310, LeftWindows = 311, RightCommand = 309, RightApple = 309, RightWindows = 312, AltGr = 313, Help = 315, Print = 316, SysReq = 317, Break = 318, Menu = 319, Mouse0 = 323, Mouse1 = 324, Mouse2 = 325, Mouse3 = 326, Mouse4 = 327, Mouse5 = 328, Mouse6 = 329, JoystickButton0 = 330, JoystickButton1 = 331, JoystickButton2 = 332, JoystickButton3 = 333, JoystickButton4 = 334, JoystickButton5 = 335, JoystickButton6 = 336, JoystickButton7 = 337, JoystickButton8 = 338, JoystickButton9 = 339, JoystickButton10 = 340, JoystickButton11 = 341, JoystickButton12 = 342, JoystickButton13 = 343, JoystickButton14 = 344, JoystickButton15 = 345, JoystickButton16 = 346, JoystickButton17 = 347, JoystickButton18 = 348, JoystickButton19 = 349, Joystick1Button0 = 350, Joystick1Button1 = 351, Joystick1Button2 = 352, Joystick1Button3 = 353, Joystick1Button4 = 354, Joystick1Button5 = 355, Joystick1Button6 = 356, Joystick1Button7 = 357, Joystick1Button8 = 358, Joystick1Button9 = 359, Joystick1Button10 = 360, Joystick1Button11 = 361, Joystick1Button12 = 362, Joystick1Button13 = 363, Joystick1Button14 = 364, Joystick1Button15 = 365, Joystick1Button16 = 366, Joystick1Button17 = 367, Joystick1Button18 = 368, Joystick1Button19 = 369, Joystick2Button0 = 370, Joystick2Button1 = 371, Joystick2Button2 = 372, Joystick2Button3 = 373, Joystick2Button4 = 374, Joystick2Button5 = 375, Joystick2Button6 = 376, Joystick2Button7 = 377, Joystick2Button8 = 378, Joystick2Button9 = 379, Joystick2Button10 = 380, Joystick2Button11 = 381, Joystick2Button12 = 382, Joystick2Button13 = 383, Joystick2Button14 = 384, Joystick2Button15 = 385, Joystick2Button16 = 386, Joystick2Button17 = 387, Joystick2Button18 = 388, Joystick2Button19 = 389, Joystick3Button0 = 390, Joystick3Button1 = 391, Joystick3Button2 = 392, Joystick3Button3 = 393, Joystick3Button4 = 394, Joystick3Button5 = 395, Joystick3Button6 = 396, Joystick3Button7 = 397, Joystick3Button8 = 398, Joystick3Button9 = 399, Joystick3Button10 = 400, Joystick3Button11 = 401, Joystick3Button12 = 402, Joystick3Button13 = 403, Joystick3Button14 = 404, Joystick3Button15 = 405, Joystick3Button16 = 406, Joystick3Button17 = 407, Joystick3Button18 = 408, Joystick3Button19 = 409, Joystick4Button0 = 410, Joystick4Button1 = 411, Joystick4Button2 = 412, Joystick4Button3 = 413, Joystick4Button4 = 414, Joystick4Button5 = 415, Joystick4Button6 = 416, Joystick4Button7 = 417, Joystick4Button8 = 418, Joystick4Button9 = 419, Joystick4Button10 = 420, Joystick4Button11 = 421, Joystick4Button12 = 422, Joystick4Button13 = 423, Joystick4Button14 = 424, Joystick4Button15 = 425, Joystick4Button16 = 426, Joystick4Button17 = 427, Joystick4Button18 = 428, Joystick4Button19 = 429, Joystick5Button0 = 430, Joystick5Button1 = 431, Joystick5Button2 = 432, Joystick5Button3 = 433, Joystick5Button4 = 434, Joystick5Button5 = 435, Joystick5Button6 = 436, Joystick5Button7 = 437, Joystick5Button8 = 438, Joystick5Button9 = 439, Joystick5Button10 = 440, Joystick5Button11 = 441, Joystick5Button12 = 442, Joystick5Button13 = 443, Joystick5Button14 = 444, Joystick5Button15 = 445, Joystick5Button16 = 446, Joystick5Button17 = 447, Joystick5Button18 = 448, Joystick5Button19 = 449, Joystick6Button0 = 450, Joystick6Button1 = 451, Joystick6Button2 = 452, Joystick6Button3 = 453, Joystick6Button4 = 454, Joystick6Button5 = 455, Joystick6Button6 = 456, Joystick6Button7 = 457, Joystick6Button8 = 458, Joystick6Button9 = 459, Joystick6Button10 = 460, Joystick6Button11 = 461, Joystick6Button12 = 462, Joystick6Button13 = 463, Joystick6Button14 = 464, Joystick6Button15 = 465, Joystick6Button16 = 466, Joystick6Button17 = 467, Joystick6Button18 = 468, Joystick6Button19 = 469, Joystick7Button0 = 470, Joystick7Button1 = 471, Joystick7Button2 = 472, Joystick7Button3 = 473, Joystick7Button4 = 474, Joystick7Button5 = 475, Joystick7Button6 = 476, Joystick7Button7 = 477, Joystick7Button8 = 478, Joystick7Button9 = 479, Joystick7Button10 = 480, Joystick7Button11 = 481, Joystick7Button12 = 482, Joystick7Button13 = 483, Joystick7Button14 = 484, Joystick7Button15 = 485, Joystick7Button16 = 486, Joystick7Button17 = 487, Joystick7Button18 = 488, Joystick7Button19 = 489, Joystick8Button0 = 490, Joystick8Button1 = 491, Joystick8Button2 = 492, Joystick8Button3 = 493, Joystick8Button4 = 494, Joystick8Button5 = 495, Joystick8Button6 = 496, Joystick8Button7 = 497, Joystick8Button8 = 498, Joystick8Button9 = 499, Joystick8Button10 = 500, Joystick8Button11 = 501, Joystick8Button12 = 502, Joystick8Button13 = 503, Joystick8Button14 = 504, Joystick8Button15 = 505, Joystick8Button16 = 506, Joystick8Button17 = 507, Joystick8Button18 = 508, Joystick8Button19 = 509 }
        enum IMECompositionMode { Auto = 0, On = 1, Off = 2 }
        enum DeviceOrientation { Unknown = 0, Portrait = 1, PortraitUpsideDown = 2, LandscapeLeft = 3, LandscapeRight = 4, FaceUp = 5, FaceDown = 6 }
        class LocationService extends System.Object {
            
        }
        class Compass extends System.Object {
            
        }
        class Gyroscope extends System.Object {
            
        }
        class ColorUtility extends System.Object {
            public constructor();
            public static TryParseHtmlString($htmlString: string, $color: $Ref<UnityEngine.Color>):boolean;
            public static ToHtmlStringRGB($color: UnityEngine.Color):string;
            public static ToHtmlStringRGBA($color: UnityEngine.Color):string;
            
        }
        class MeshRenderer extends UnityEngine.Renderer {
            public additionalVertexStreams: UnityEngine.Mesh;
            public subMeshStartIndex: number;
            public constructor();
            
        }
        class Renderer extends UnityEngine.Component {
            
        }
        class Mesh extends UnityEngine.Object {
            
        }
        class Resources extends System.Object {
            public constructor();
            public static FindObjectsOfTypeAll($type: System.Type):System.Array$1<UnityEngine.Object>;
            public static Load($path: string):UnityEngine.Object;
            public static Load($path: string, $systemTypeInstance: System.Type):UnityEngine.Object;
            public static LoadAsync($path: string):UnityEngine.ResourceRequest;
            public static LoadAsync($path: string, $type: System.Type):UnityEngine.ResourceRequest;
            public static LoadAll($path: string, $systemTypeInstance: System.Type):System.Array$1<UnityEngine.Object>;
            public static LoadAll($path: string):System.Array$1<UnityEngine.Object>;
            public static GetBuiltinResource($type: System.Type, $path: string):UnityEngine.Object;
            public static UnloadAsset($assetToUnload: UnityEngine.Object):void;
            public static UnloadUnusedAssets():UnityEngine.AsyncOperation;
            
        }
        class ResourceRequest extends UnityEngine.AsyncOperation {
            
        }
        class AsyncOperation extends UnityEngine.YieldInstruction {
            
        }
        class Application extends System.Object {
            public static isPlaying: boolean;
            public static isFocused: boolean;
            public static platform: UnityEngine.RuntimePlatform;
            public static buildGUID: string;
            public static isMobilePlatform: boolean;
            public static isConsolePlatform: boolean;
            public static runInBackground: boolean;
            public static isBatchMode: boolean;
            public static dataPath: string;
            public static streamingAssetsPath: string;
            public static persistentDataPath: string;
            public static temporaryCachePath: string;
            public static absoluteURL: string;
            public static unityVersion: string;
            public static version: string;
            public static installerName: string;
            public static identifier: string;
            public static installMode: UnityEngine.ApplicationInstallMode;
            public static sandboxType: UnityEngine.ApplicationSandboxType;
            public static productName: string;
            public static companyName: string;
            public static cloudProjectId: string;
            public static targetFrameRate: number;
            public static systemLanguage: UnityEngine.SystemLanguage;
            public static consoleLogPath: string;
            public static backgroundLoadingPriority: UnityEngine.ThreadPriority;
            public static internetReachability: UnityEngine.NetworkReachability;
            public static genuine: boolean;
            public static genuineCheckAvailable: boolean;
            public static isEditor: boolean;
            public constructor();
            public static Quit($exitCode: number):void;
            public static Quit():void;
            public static Unload():void;
            public static CanStreamedLevelBeLoaded($levelIndex: number):boolean;
            public static CanStreamedLevelBeLoaded($levelName: string):boolean;
            public static IsPlaying($obj: UnityEngine.Object):boolean;
            public static GetBuildTags():System.Array$1<string>;
            public static SetBuildTags($buildTags: System.Array$1<string>):void;
            public static HasProLicense():boolean;
            public static RequestAdvertisingIdentifierAsync($delegateMethod: UnityEngine.Application.AdvertisingIdentifierCallback):boolean;
            public static OpenURL($url: string):void;
            public static GetStackTraceLogType($logType: UnityEngine.LogType):UnityEngine.StackTraceLogType;
            public static SetStackTraceLogType($logType: UnityEngine.LogType, $stackTraceType: UnityEngine.StackTraceLogType):void;
            public static RequestUserAuthorization($mode: UnityEngine.UserAuthorization):UnityEngine.AsyncOperation;
            public static HasUserAuthorization($mode: UnityEngine.UserAuthorization):boolean;
            public static add_lowMemory($value: UnityEngine.Application.LowMemoryCallback):void;
            public static remove_lowMemory($value: UnityEngine.Application.LowMemoryCallback):void;
            public static add_logMessageReceived($value: UnityEngine.Application.LogCallback):void;
            public static remove_logMessageReceived($value: UnityEngine.Application.LogCallback):void;
            public static add_logMessageReceivedThreaded($value: UnityEngine.Application.LogCallback):void;
            public static remove_logMessageReceivedThreaded($value: UnityEngine.Application.LogCallback):void;
            public static add_onBeforeRender($value: UnityEngine.Events.UnityAction):void;
            public static remove_onBeforeRender($value: UnityEngine.Events.UnityAction):void;
            public static add_focusChanged($value: System.Action$1<boolean>):void;
            public static remove_focusChanged($value: System.Action$1<boolean>):void;
            public static add_wantsToQuit($value: System.Func$1<boolean>):void;
            public static remove_wantsToQuit($value: System.Func$1<boolean>):void;
            public static add_quitting($value: System.Action):void;
            public static remove_quitting($value: System.Action):void;
            
        }
        enum RuntimePlatform { OSXEditor = 0, OSXPlayer = 1, WindowsPlayer = 2, OSXWebPlayer = 3, OSXDashboardPlayer = 4, WindowsWebPlayer = 5, WindowsEditor = 7, IPhonePlayer = 8, XBOX360 = 10, PS3 = 9, Android = 11, NaCl = 12, FlashPlayer = 15, LinuxPlayer = 13, LinuxEditor = 16, WebGLPlayer = 17, MetroPlayerX86 = 18, WSAPlayerX86 = 18, MetroPlayerX64 = 19, WSAPlayerX64 = 19, MetroPlayerARM = 20, WSAPlayerARM = 20, WP8Player = 21, BB10Player = 22, BlackBerryPlayer = 22, TizenPlayer = 23, PSP2 = 24, PS4 = 25, PSM = 26, XboxOne = 27, SamsungTVPlayer = 28, WiiU = 30, tvOS = 31, Switch = 32, Lumin = 33 }
        enum ApplicationInstallMode { Unknown = 0, Store = 1, DeveloperBuild = 2, Adhoc = 3, Enterprise = 4, Editor = 5 }
        enum ApplicationSandboxType { Unknown = 0, NotSandboxed = 1, Sandboxed = 2, SandboxBroken = 3 }
        enum SystemLanguage { Afrikaans = 0, Arabic = 1, Basque = 2, Belarusian = 3, Bulgarian = 4, Catalan = 5, Chinese = 6, Czech = 7, Danish = 8, Dutch = 9, English = 10, Estonian = 11, Faroese = 12, Finnish = 13, French = 14, German = 15, Greek = 16, Hebrew = 17, Hugarian = 18, Icelandic = 19, Indonesian = 20, Italian = 21, Japanese = 22, Korean = 23, Latvian = 24, Lithuanian = 25, Norwegian = 26, Polish = 27, Portuguese = 28, Romanian = 29, Russian = 30, SerboCroatian = 31, Slovak = 32, Slovenian = 33, Spanish = 34, Swedish = 35, Thai = 36, Turkish = 37, Ukrainian = 38, Vietnamese = 39, ChineseSimplified = 40, ChineseTraditional = 41, Unknown = 42, Hungarian = 18 }
        enum StackTraceLogType { None = 0, ScriptOnly = 1, Full = 2 }
        enum LogType { Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
        enum ThreadPriority { Low = 0, BelowNormal = 1, Normal = 2, High = 4 }
        enum NetworkReachability { NotReachable = 0, ReachableViaCarrierDataNetwork = 1, ReachableViaLocalAreaNetwork = 2 }
        enum UserAuthorization { WebCam = 1, Microphone = 2 }
        class Animator extends UnityEngine.Behaviour {
            
        }
        class TouchScreenKeyboard extends System.Object {
            
        }
        enum TouchScreenKeyboardType { Default = 0, ASCIICapable = 1, NumbersAndPunctuation = 2, URL = 3, NumberPad = 4, PhonePad = 5, NamePhonePad = 6, EmailAddress = 7, NintendoNetworkAccount = 8, Social = 9, Search = 10 }
        class Event extends System.Object {
            
        }
        
    }
    namespace System {
        class Object {
            public constructor();
            public Equals($obj: any):boolean;
            public static Equals($objA: any, $objB: any):boolean;
            public GetHashCode():number;
            public GetType():System.Type;
            public ToString():string;
            public static ReferenceEquals($objA: any, $objB: any):boolean;
            
        }
        type Action$1<T> = (obj: T) => void;
        class Void extends System.ValueType {
            
        }
        class ValueType extends System.Object {
            
        }
        type MulticastDelegate = (...args:any[]) => any;
        var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
        class Delegate extends System.Object {
            public Method: System.Reflection.MethodInfo;
            public Target: any;
            public static CreateDelegate($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean):Function;
            public static CreateDelegate($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo):Function;
            public static CreateDelegate($type: System.Type, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean):Function;
            public static CreateDelegate($type: System.Type, $method: System.Reflection.MethodInfo):Function;
            public static CreateDelegate($type: System.Type, $target: any, $method: string):Function;
            public static CreateDelegate($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean):Function;
            public static CreateDelegate($type: System.Type, $target: System.Type, $method: string):Function;
            public static CreateDelegate($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean):Function;
            public static CreateDelegate($type: System.Type, $target: any, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean):Function;
            public static CreateDelegate($type: System.Type, $target: any, $method: string, $ignoreCase: boolean):Function;
            public DynamicInvoke(...args: any[]):any;
            public Clone():any;
            public GetObjectData($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext):void;
            public GetInvocationList():System.Array$1<Function>;
            public static Combine($a: Function, $b: Function):Function;
            public static Combine(...delegates: Function[]):Function;
            public static Remove($source: Function, $value: Function):Function;
            public static RemoveAll($source: Function, $value: Function):Function;
            public static op_Equality($d1: Function, $d2: Function):boolean;
            public static op_Inequality($d1: Function, $d2: Function):boolean;
            
        }
        class Int32 extends System.ValueType {
            
        }
        type Action$2<T1,T2> = (arg1: T1, arg2: T2) => void;
        class Single extends System.ValueType {
            
        }
        type Action = () => void;
        var Action: {new (func: () => void): Action;}
        class Array extends System.Object {
            public LongLength: bigint;
            public IsFixedSize: boolean;
            public IsReadOnly: boolean;
            public IsSynchronized: boolean;
            public SyncRoot: any;
            public Length: number;
            public Rank: number;
            public static CreateInstance($elementType: System.Type, ...lengths: bigint[]):System.Array;
            public CopyTo($array: System.Array, $index: number):void;
            public Clone():any;
            public static BinarySearch($array: System.Array, $value: any):number;
            public static Copy($sourceArray: System.Array, $destinationArray: System.Array, $length: bigint):void;
            public static Copy($sourceArray: System.Array, $sourceIndex: bigint, $destinationArray: System.Array, $destinationIndex: bigint, $length: bigint):void;
            public CopyTo($array: System.Array, $index: bigint):void;
            public GetLongLength($dimension: number):bigint;
            public GetValue($index: bigint):any;
            public GetValue($index1: bigint, $index2: bigint):any;
            public GetValue($index1: bigint, $index2: bigint, $index3: bigint):any;
            public GetValue(...indices: bigint[]):any;
            public static BinarySearch($array: System.Array, $index: number, $length: number, $value: any):number;
            public static BinarySearch($array: System.Array, $value: any, $comparer: System.Collections.IComparer):number;
            public static BinarySearch($array: System.Array, $index: number, $length: number, $value: any, $comparer: System.Collections.IComparer):number;
            public static IndexOf($array: System.Array, $value: any):number;
            public static IndexOf($array: System.Array, $value: any, $startIndex: number):number;
            public static IndexOf($array: System.Array, $value: any, $startIndex: number, $count: number):number;
            public static LastIndexOf($array: System.Array, $value: any):number;
            public static LastIndexOf($array: System.Array, $value: any, $startIndex: number):number;
            public static LastIndexOf($array: System.Array, $value: any, $startIndex: number, $count: number):number;
            public static Reverse($array: System.Array):void;
            public static Reverse($array: System.Array, $index: number, $length: number):void;
            public SetValue($value: any, $index: bigint):void;
            public SetValue($value: any, $index1: bigint, $index2: bigint):void;
            public SetValue($value: any, $index1: bigint, $index2: bigint, $index3: bigint):void;
            public SetValue($value: any, ...indices: bigint[]):void;
            public static Sort($array: System.Array):void;
            public static Sort($array: System.Array, $index: number, $length: number):void;
            public static Sort($array: System.Array, $comparer: System.Collections.IComparer):void;
            public static Sort($array: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer):void;
            public static Sort($keys: System.Array, $items: System.Array):void;
            public static Sort($keys: System.Array, $items: System.Array, $comparer: System.Collections.IComparer):void;
            public static Sort($keys: System.Array, $items: System.Array, $index: number, $length: number):void;
            public static Sort($keys: System.Array, $items: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer):void;
            public GetEnumerator():System.Collections.IEnumerator;
            public GetLength($dimension: number):number;
            public GetLowerBound($dimension: number):number;
            public GetValue(...indices: number[]):any;
            public SetValue($value: any, ...indices: number[]):void;
            public GetUpperBound($dimension: number):number;
            public GetValue($index: number):any;
            public GetValue($index1: number, $index2: number):any;
            public GetValue($index1: number, $index2: number, $index3: number):any;
            public SetValue($value: any, $index: number):void;
            public SetValue($value: any, $index1: number, $index2: number):void;
            public SetValue($value: any, $index1: number, $index2: number, $index3: number):void;
            public static CreateInstance($elementType: System.Type, $length: number):System.Array;
            public static CreateInstance($elementType: System.Type, $length1: number, $length2: number):System.Array;
            public static CreateInstance($elementType: System.Type, $length1: number, $length2: number, $length3: number):System.Array;
            public static CreateInstance($elementType: System.Type, ...lengths: number[]):System.Array;
            public static CreateInstance($elementType: System.Type, $lengths: System.Array$1<number>, $lowerBounds: System.Array$1<number>):System.Array;
            public static Clear($array: System.Array, $index: number, $length: number):void;
            public static Copy($sourceArray: System.Array, $destinationArray: System.Array, $length: number):void;
            public static Copy($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number):void;
            public static ConstrainedCopy($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number):void;
            public Initialize():void;
            
        }
        class String extends System.Object {
            
        }
        class Boolean extends System.ValueType {
            
        }
        class UInt16 extends System.ValueType {
            
        }
        class Exception extends System.Object {
            
        }
        type Converter$2<TInput,TOutput> = (input: TInput) => TOutput;
        type Predicate$1<T> = (obj: T) => boolean;
        type Comparison$1<T> = (x: T, y: T) => number;
        class Type extends System.Reflection.MemberInfo {
            public static FilterAttribute: System.Reflection.MemberFilter;
            public static FilterName: System.Reflection.MemberFilter;
            public static FilterNameIgnoreCase: System.Reflection.MemberFilter;
            public static Missing: any;
            public static Delimiter: number;
            public static EmptyTypes: System.Array$1<System.Type>;
            public MemberType: System.Reflection.MemberTypes;
            public DeclaringType: System.Type;
            public DeclaringMethod: System.Reflection.MethodBase;
            public ReflectedType: System.Type;
            public StructLayoutAttribute: System.Runtime.InteropServices.StructLayoutAttribute;
            public GUID: System.Guid;
            public static DefaultBinder: System.Reflection.Binder;
            public Module: System.Reflection.Module;
            public Assembly: System.Reflection.Assembly;
            public TypeHandle: System.RuntimeTypeHandle;
            public FullName: string;
            public Namespace: string;
            public AssemblyQualifiedName: string;
            public BaseType: System.Type;
            public TypeInitializer: System.Reflection.ConstructorInfo;
            public IsNested: boolean;
            public Attributes: System.Reflection.TypeAttributes;
            public GenericParameterAttributes: System.Reflection.GenericParameterAttributes;
            public IsVisible: boolean;
            public IsNotPublic: boolean;
            public IsPublic: boolean;
            public IsNestedPublic: boolean;
            public IsNestedPrivate: boolean;
            public IsNestedFamily: boolean;
            public IsNestedAssembly: boolean;
            public IsNestedFamANDAssem: boolean;
            public IsNestedFamORAssem: boolean;
            public IsAutoLayout: boolean;
            public IsLayoutSequential: boolean;
            public IsExplicitLayout: boolean;
            public IsClass: boolean;
            public IsInterface: boolean;
            public IsValueType: boolean;
            public IsAbstract: boolean;
            public IsSealed: boolean;
            public IsEnum: boolean;
            public IsSpecialName: boolean;
            public IsImport: boolean;
            public IsSerializable: boolean;
            public IsAnsiClass: boolean;
            public IsUnicodeClass: boolean;
            public IsAutoClass: boolean;
            public IsArray: boolean;
            public IsGenericType: boolean;
            public IsGenericTypeDefinition: boolean;
            public IsConstructedGenericType: boolean;
            public IsGenericParameter: boolean;
            public GenericParameterPosition: number;
            public ContainsGenericParameters: boolean;
            public IsByRef: boolean;
            public IsPointer: boolean;
            public IsPrimitive: boolean;
            public IsCOMObject: boolean;
            public HasElementType: boolean;
            public IsContextful: boolean;
            public IsMarshalByRef: boolean;
            public GenericTypeArguments: System.Array$1<System.Type>;
            public IsSecurityCritical: boolean;
            public IsSecuritySafeCritical: boolean;
            public IsSecurityTransparent: boolean;
            public UnderlyingSystemType: System.Type;
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>):System.Type;
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean):System.Type;
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean, $ignoreCase: boolean):System.Type;
            public MakePointerType():System.Type;
            public MakeByRefType():System.Type;
            public MakeArrayType():System.Type;
            public MakeArrayType($rank: number):System.Type;
            public static GetTypeFromProgID($progID: string):System.Type;
            public static GetTypeFromProgID($progID: string, $throwOnError: boolean):System.Type;
            public static GetTypeFromProgID($progID: string, $server: string):System.Type;
            public static GetTypeFromProgID($progID: string, $server: string, $throwOnError: boolean):System.Type;
            public static GetTypeFromCLSID($clsid: System.Guid):System.Type;
            public static GetTypeFromCLSID($clsid: System.Guid, $throwOnError: boolean):System.Type;
            public static GetTypeFromCLSID($clsid: System.Guid, $server: string):System.Type;
            public static GetTypeFromCLSID($clsid: System.Guid, $server: string, $throwOnError: boolean):System.Type;
            public static GetTypeCode($type: System.Type):System.TypeCode;
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>, $culture: System.Globalization.CultureInfo, $namedParameters: System.Array$1<string>):any;
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo):any;
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>):any;
            public static GetTypeHandle($o: any):System.RuntimeTypeHandle;
            public GetArrayRank():number;
            public GetConstructor($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.ConstructorInfo;
            public GetConstructor($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.ConstructorInfo;
            public GetConstructor($types: System.Array$1<System.Type>):System.Reflection.ConstructorInfo;
            public GetConstructors():System.Array$1<System.Reflection.ConstructorInfo>;
            public GetConstructors($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.ConstructorInfo>;
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            public GetMethod($name: string, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            public GetMethod($name: string, $types: System.Array$1<System.Type>):System.Reflection.MethodInfo;
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.MethodInfo;
            public GetMethod($name: string):System.Reflection.MethodInfo;
            public GetMethods():System.Array$1<System.Reflection.MethodInfo>;
            public GetMethods($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MethodInfo>;
            public GetField($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.FieldInfo;
            public GetField($name: string):System.Reflection.FieldInfo;
            public GetFields():System.Array$1<System.Reflection.FieldInfo>;
            public GetFields($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.FieldInfo>;
            public GetInterface($name: string):System.Type;
            public GetInterface($name: string, $ignoreCase: boolean):System.Type;
            public GetInterfaces():System.Array$1<System.Type>;
            public FindInterfaces($filter: System.Reflection.TypeFilter, $filterCriteria: any):System.Array$1<System.Type>;
            public GetEvent($name: string):System.Reflection.EventInfo;
            public GetEvent($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.EventInfo;
            public GetEvents():System.Array$1<System.Reflection.EventInfo>;
            public GetEvents($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.EventInfo>;
            public GetProperty($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.PropertyInfo;
            public GetProperty($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.PropertyInfo;
            public GetProperty($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.PropertyInfo;
            public GetProperty($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>):System.Reflection.PropertyInfo;
            public GetProperty($name: string, $types: System.Array$1<System.Type>):System.Reflection.PropertyInfo;
            public GetProperty($name: string, $returnType: System.Type):System.Reflection.PropertyInfo;
            public GetProperty($name: string):System.Reflection.PropertyInfo;
            public GetProperties($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.PropertyInfo>;
            public GetProperties():System.Array$1<System.Reflection.PropertyInfo>;
            public GetNestedTypes():System.Array$1<System.Type>;
            public GetNestedTypes($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Type>;
            public GetNestedType($name: string):System.Type;
            public GetNestedType($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Type;
            public GetMember($name: string):System.Array$1<System.Reflection.MemberInfo>;
            public GetMember($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            public GetMember($name: string, $type: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            public GetMembers():System.Array$1<System.Reflection.MemberInfo>;
            public GetMembers($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            public GetDefaultMembers():System.Array$1<System.Reflection.MemberInfo>;
            public FindMembers($memberType: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags, $filter: System.Reflection.MemberFilter, $filterCriteria: any):System.Array$1<System.Reflection.MemberInfo>;
            public GetGenericParameterConstraints():System.Array$1<System.Type>;
            public MakeGenericType(...typeArguments: System.Type[]):System.Type;
            public GetElementType():System.Type;
            public GetGenericArguments():System.Array$1<System.Type>;
            public GetGenericTypeDefinition():System.Type;
            public GetEnumNames():System.Array$1<string>;
            public GetEnumValues():System.Array;
            public GetEnumUnderlyingType():System.Type;
            public IsEnumDefined($value: any):boolean;
            public GetEnumName($value: any):string;
            public IsSubclassOf($c: System.Type):boolean;
            public IsInstanceOfType($o: any):boolean;
            public IsAssignableFrom($c: System.Type):boolean;
            public IsEquivalentTo($other: System.Type):boolean;
            public static GetTypeArray($args: System.Array$1<any>):System.Array$1<System.Type>;
            public Equals($o: any):boolean;
            public Equals($o: System.Type):boolean;
            public static op_Equality($left: System.Type, $right: System.Type):boolean;
            public static op_Inequality($left: System.Type, $right: System.Type):boolean;
            public GetInterfaceMap($interfaceType: System.Type):System.Reflection.InterfaceMapping;
            public GetType():System.Type;
            public static GetType($typeName: string):System.Type;
            public static GetType($typeName: string, $throwOnError: boolean):System.Type;
            public static GetType($typeName: string, $throwOnError: boolean, $ignoreCase: boolean):System.Type;
            public static ReflectionOnlyGetType($typeName: string, $throwIfNotFound: boolean, $ignoreCase: boolean):System.Type;
            public static GetTypeFromHandle($handle: System.RuntimeTypeHandle):System.Type;
            public GetType():System.Type;
            
        }
        class Int64 extends System.ValueType {
            
        }
        class Enum extends System.ValueType {
            
        }
        class Char extends System.ValueType {
            
        }
        type Func$2<T,TResult> = (arg: T) => TResult;
        type Func$4<T1,T2,T3,TResult> = (arg1: T1, arg2: T2, arg3: T3) => TResult;
        class Attribute extends System.Object {
            
        }
        class Guid extends System.ValueType {
            
        }
        enum TypeCode { Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        class RuntimeTypeHandle extends System.ValueType {
            
        }
        class UInt32 extends System.ValueType {
            
        }
        class DateTime extends System.ValueType {
            public static MinValue: Date;
            public static MaxValue: Date;
            public Date: Date;
            public Day: number;
            public DayOfWeek: System.DayOfWeek;
            public DayOfYear: number;
            public Hour: number;
            public Kind: System.DateTimeKind;
            public Millisecond: number;
            public Minute: number;
            public Month: number;
            public static Now: Date;
            public static UtcNow: Date;
            public Second: number;
            public Ticks: bigint;
            public TimeOfDay: System.TimeSpan;
            public static Today: Date;
            public Year: number;
            public constructor($ticks: bigint);
            public constructor($ticks: bigint, $kind: System.DateTimeKind);
            public constructor($year: number, $month: number, $day: number);
            public constructor($year: number, $month: number, $day: number, $calendar: System.Globalization.Calendar);
            public constructor($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number);
            public constructor($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $kind: System.DateTimeKind);
            public constructor($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $calendar: System.Globalization.Calendar);
            public constructor($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number);
            public constructor($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number, $kind: System.DateTimeKind);
            public constructor($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number, $calendar: System.Globalization.Calendar);
            public constructor($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number, $calendar: System.Globalization.Calendar, $kind: System.DateTimeKind);
            public Add($value: System.TimeSpan):Date;
            public AddDays($value: number):Date;
            public AddHours($value: number):Date;
            public AddMilliseconds($value: number):Date;
            public AddMinutes($value: number):Date;
            public AddMonths($months: number):Date;
            public AddSeconds($value: number):Date;
            public AddTicks($value: bigint):Date;
            public AddYears($value: number):Date;
            public static Compare($t1: Date, $t2: Date):number;
            public CompareTo($value: any):number;
            public CompareTo($value: Date):number;
            public static DaysInMonth($year: number, $month: number):number;
            public Equals($value: any):boolean;
            public Equals($value: Date):boolean;
            public static Equals($t1: Date, $t2: Date):boolean;
            public static FromBinary($dateData: bigint):Date;
            public static FromFileTime($fileTime: bigint):Date;
            public static FromFileTimeUtc($fileTime: bigint):Date;
            public static FromOADate($d: number):Date;
            public IsDaylightSavingTime():boolean;
            public static SpecifyKind($value: Date, $kind: System.DateTimeKind):Date;
            public ToBinary():bigint;
            public static IsLeapYear($year: number):boolean;
            public static Parse($s: string):Date;
            public static Parse($s: string, $provider: System.IFormatProvider):Date;
            public static Parse($s: string, $provider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles):Date;
            public static ParseExact($s: string, $format: string, $provider: System.IFormatProvider):Date;
            public static ParseExact($s: string, $format: string, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles):Date;
            public static ParseExact($s: string, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles):Date;
            public Subtract($value: Date):System.TimeSpan;
            public Subtract($value: System.TimeSpan):Date;
            public ToOADate():number;
            public ToFileTime():bigint;
            public ToFileTimeUtc():bigint;
            public ToLocalTime():Date;
            public ToLongDateString():string;
            public ToLongTimeString():string;
            public ToShortDateString():string;
            public ToShortTimeString():string;
            public ToString():string;
            public ToString($format: string):string;
            public ToString($provider: System.IFormatProvider):string;
            public ToString($format: string, $provider: System.IFormatProvider):string;
            public ToUniversalTime():Date;
            public static TryParse($s: string, $result: $Ref<Date>):boolean;
            public static TryParse($s: string, $provider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles, $result: $Ref<Date>):boolean;
            public static TryParseExact($s: string, $format: string, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<Date>):boolean;
            public static TryParseExact($s: string, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<Date>):boolean;
            public static op_Addition($d: Date, $t: System.TimeSpan):Date;
            public static op_Subtraction($d: Date, $t: System.TimeSpan):Date;
            public static op_Subtraction($d1: Date, $d2: Date):System.TimeSpan;
            public static op_Equality($d1: Date, $d2: Date):boolean;
            public static op_Inequality($d1: Date, $d2: Date):boolean;
            public static op_LessThan($t1: Date, $t2: Date):boolean;
            public static op_LessThanOrEqual($t1: Date, $t2: Date):boolean;
            public static op_GreaterThan($t1: Date, $t2: Date):boolean;
            public static op_GreaterThanOrEqual($t1: Date, $t2: Date):boolean;
            public GetDateTimeFormats():System.Array$1<string>;
            public GetDateTimeFormats($provider: System.IFormatProvider):System.Array$1<string>;
            public GetDateTimeFormats($format: number):System.Array$1<string>;
            public GetDateTimeFormats($format: number, $provider: System.IFormatProvider):System.Array$1<string>;
            public GetTypeCode():System.TypeCode;
            
        }
        class TimeSpan extends System.ValueType {
            public static TicksPerMillisecond: bigint;
            public static TicksPerSecond: bigint;
            public static TicksPerMinute: bigint;
            public static TicksPerHour: bigint;
            public static TicksPerDay: bigint;
            public static Zero: System.TimeSpan;
            public static MaxValue: System.TimeSpan;
            public static MinValue: System.TimeSpan;
            public Ticks: bigint;
            public Days: number;
            public Hours: number;
            public Milliseconds: number;
            public Minutes: number;
            public Seconds: number;
            public TotalDays: number;
            public TotalHours: number;
            public TotalMilliseconds: number;
            public TotalMinutes: number;
            public TotalSeconds: number;
            public constructor($ticks: bigint);
            public constructor($hours: number, $minutes: number, $seconds: number);
            public constructor($days: number, $hours: number, $minutes: number, $seconds: number);
            public constructor($days: number, $hours: number, $minutes: number, $seconds: number, $milliseconds: number);
            public Add($ts: System.TimeSpan):System.TimeSpan;
            public static Compare($t1: System.TimeSpan, $t2: System.TimeSpan):number;
            public CompareTo($value: any):number;
            public CompareTo($value: System.TimeSpan):number;
            public static FromDays($value: number):System.TimeSpan;
            public Duration():System.TimeSpan;
            public Equals($value: any):boolean;
            public Equals($obj: System.TimeSpan):boolean;
            public static Equals($t1: System.TimeSpan, $t2: System.TimeSpan):boolean;
            public static FromHours($value: number):System.TimeSpan;
            public static FromMilliseconds($value: number):System.TimeSpan;
            public static FromMinutes($value: number):System.TimeSpan;
            public Negate():System.TimeSpan;
            public static FromSeconds($value: number):System.TimeSpan;
            public Subtract($ts: System.TimeSpan):System.TimeSpan;
            public static FromTicks($value: bigint):System.TimeSpan;
            public static Parse($s: string):System.TimeSpan;
            public static Parse($input: string, $formatProvider: System.IFormatProvider):System.TimeSpan;
            public static ParseExact($input: string, $format: string, $formatProvider: System.IFormatProvider):System.TimeSpan;
            public static ParseExact($input: string, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider):System.TimeSpan;
            public static ParseExact($input: string, $format: string, $formatProvider: System.IFormatProvider, $styles: System.Globalization.TimeSpanStyles):System.TimeSpan;
            public static ParseExact($input: string, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $styles: System.Globalization.TimeSpanStyles):System.TimeSpan;
            public static TryParse($s: string, $result: $Ref<System.TimeSpan>):boolean;
            public static TryParse($input: string, $formatProvider: System.IFormatProvider, $result: $Ref<System.TimeSpan>):boolean;
            public static TryParseExact($input: string, $format: string, $formatProvider: System.IFormatProvider, $result: $Ref<System.TimeSpan>):boolean;
            public static TryParseExact($input: string, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $result: $Ref<System.TimeSpan>):boolean;
            public static TryParseExact($input: string, $format: string, $formatProvider: System.IFormatProvider, $styles: System.Globalization.TimeSpanStyles, $result: $Ref<System.TimeSpan>):boolean;
            public static TryParseExact($input: string, $formats: System.Array$1<string>, $formatProvider: System.IFormatProvider, $styles: System.Globalization.TimeSpanStyles, $result: $Ref<System.TimeSpan>):boolean;
            public ToString():string;
            public ToString($format: string):string;
            public ToString($format: string, $formatProvider: System.IFormatProvider):string;
            public static op_UnaryNegation($t: System.TimeSpan):System.TimeSpan;
            public static op_Subtraction($t1: System.TimeSpan, $t2: System.TimeSpan):System.TimeSpan;
            public static op_UnaryPlus($t: System.TimeSpan):System.TimeSpan;
            public static op_Addition($t1: System.TimeSpan, $t2: System.TimeSpan):System.TimeSpan;
            public static op_Equality($t1: System.TimeSpan, $t2: System.TimeSpan):boolean;
            public static op_Inequality($t1: System.TimeSpan, $t2: System.TimeSpan):boolean;
            public static op_LessThan($t1: System.TimeSpan, $t2: System.TimeSpan):boolean;
            public static op_LessThanOrEqual($t1: System.TimeSpan, $t2: System.TimeSpan):boolean;
            public static op_GreaterThan($t1: System.TimeSpan, $t2: System.TimeSpan):boolean;
            public static op_GreaterThanOrEqual($t1: System.TimeSpan, $t2: System.TimeSpan):boolean;
            
        }
        class Double extends System.ValueType {
            
        }
        enum DateTimeKind { Unspecified = 0, Utc = 1, Local = 2 }
        enum DayOfWeek { Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6 }
        interface IFormatProvider {
            
        }
        class UInt64 extends System.ValueType {
            
        }
        type Func$1<TResult> = () => TResult;
        
    }
    namespace UnityEngine.UI {
        class Slider extends UnityEngine.UI.Selectable {
            
        }
        class Selectable extends UnityEngine.EventSystems.UIBehaviour {
            public static allSelectables: System.Collections.Generic.List$1<UnityEngine.UI.Selectable>;
            public navigation: UnityEngine.UI.Navigation;
            public transition: UnityEngine.UI.Selectable.Transition;
            public colors: UnityEngine.UI.ColorBlock;
            public spriteState: UnityEngine.UI.SpriteState;
            public animationTriggers: UnityEngine.UI.AnimationTriggers;
            public targetGraphic: UnityEngine.UI.Graphic;
            public interactable: boolean;
            public image: UnityEngine.UI.Image;
            public animator: UnityEngine.Animator;
            public IsInteractable():boolean;
            public FindSelectable($dir: UnityEngine.Vector3):UnityEngine.UI.Selectable;
            public FindSelectableOnLeft():UnityEngine.UI.Selectable;
            public FindSelectableOnRight():UnityEngine.UI.Selectable;
            public FindSelectableOnUp():UnityEngine.UI.Selectable;
            public FindSelectableOnDown():UnityEngine.UI.Selectable;
            public OnMove($eventData: UnityEngine.EventSystems.AxisEventData):void;
            public OnPointerDown($eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnPointerUp($eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnPointerEnter($eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnPointerExit($eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnSelect($eventData: UnityEngine.EventSystems.BaseEventData):void;
            public OnDeselect($eventData: UnityEngine.EventSystems.BaseEventData):void;
            public Select():void;
            
        }
        class Image extends UnityEngine.UI.MaskableGraphic {
            
        }
        class MaskableGraphic extends UnityEngine.UI.Graphic {
            
        }
        class Graphic extends UnityEngine.EventSystems.UIBehaviour {
            
        }
        class Navigation extends System.ValueType {
            
        }
        class ColorBlock extends System.ValueType {
            
        }
        class SpriteState extends System.ValueType {
            
        }
        class AnimationTriggers extends System.Object {
            
        }
        class Button extends UnityEngine.UI.Selectable {
            public onClick: UnityEngine.UI.Button.ButtonClickedEvent;
            public OnPointerClick($eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnSubmit($eventData: UnityEngine.EventSystems.BaseEventData):void;
            
        }
        class InputField extends UnityEngine.UI.Selectable {
            public shouldHideMobileInput: boolean;
            public text: string;
            public isFocused: boolean;
            public caretBlinkRate: number;
            public caretWidth: number;
            public textComponent: UnityEngine.UI.Text;
            public placeholder: UnityEngine.UI.Graphic;
            public caretColor: UnityEngine.Color;
            public customCaretColor: boolean;
            public selectionColor: UnityEngine.Color;
            public onEndEdit: UnityEngine.UI.InputField.SubmitEvent;
            public onValueChanged: UnityEngine.UI.InputField.OnChangeEvent;
            public onValidateInput: UnityEngine.UI.InputField.OnValidateInput;
            public characterLimit: number;
            public contentType: UnityEngine.UI.InputField.ContentType;
            public lineType: UnityEngine.UI.InputField.LineType;
            public inputType: UnityEngine.UI.InputField.InputType;
            public touchScreenKeyboard: UnityEngine.TouchScreenKeyboard;
            public keyboardType: UnityEngine.TouchScreenKeyboardType;
            public characterValidation: UnityEngine.UI.InputField.CharacterValidation;
            public readOnly: boolean;
            public multiLine: boolean;
            public asteriskChar: number;
            public wasCanceled: boolean;
            public caretPosition: number;
            public selectionAnchorPosition: number;
            public selectionFocusPosition: number;
            public minWidth: number;
            public preferredWidth: number;
            public flexibleWidth: number;
            public minHeight: number;
            public preferredHeight: number;
            public flexibleHeight: number;
            public layoutPriority: number;
            public MoveTextEnd($shift: boolean):void;
            public MoveTextStart($shift: boolean):void;
            public OnBeginDrag($eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnDrag($eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnEndDrag($eventData: UnityEngine.EventSystems.PointerEventData):void;
            public ProcessEvent($e: UnityEngine.Event):void;
            public OnUpdateSelected($eventData: UnityEngine.EventSystems.BaseEventData):void;
            public ForceLabelUpdate():void;
            public Rebuild($update: UnityEngine.UI.CanvasUpdate):void;
            public LayoutComplete():void;
            public GraphicUpdateComplete():void;
            public ActivateInputField():void;
            public OnPointerClick($eventData: UnityEngine.EventSystems.PointerEventData):void;
            public DeactivateInputField():void;
            public OnSubmit($eventData: UnityEngine.EventSystems.BaseEventData):void;
            public CalculateLayoutInputHorizontal():void;
            public CalculateLayoutInputVertical():void;
            
        }
        class Text extends UnityEngine.UI.MaskableGraphic {
            
        }
        enum CanvasUpdate { Prelayout = 0, Layout = 1, PostLayout = 2, PreRender = 3, LatePreRender = 4, MaxUpdateValue = 5 }
        class Toggle extends UnityEngine.UI.Selectable {
            public toggleTransition: UnityEngine.UI.Toggle.ToggleTransition;
            public graphic: UnityEngine.UI.Graphic;
            public onValueChanged: UnityEngine.UI.Toggle.ToggleEvent;
            public group: UnityEngine.UI.ToggleGroup;
            public isOn: boolean;
            public Rebuild($executing: UnityEngine.UI.CanvasUpdate):void;
            public LayoutComplete():void;
            public GraphicUpdateComplete():void;
            public OnPointerClick($eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnSubmit($eventData: UnityEngine.EventSystems.BaseEventData):void;
            
        }
        class ToggleGroup extends UnityEngine.EventSystems.UIBehaviour {
            
        }
        
    }
    namespace UnityEngine.EventSystems {
        class UIBehaviour extends UnityEngine.MonoBehaviour {
            public IsActive():boolean;
            public IsDestroyed():boolean;
            
        }
        class AxisEventData extends UnityEngine.EventSystems.BaseEventData {
            
        }
        class BaseEventData extends UnityEngine.EventSystems.AbstractEventData {
            
        }
        class AbstractEventData extends System.Object {
            
        }
        class PointerEventData extends UnityEngine.EventSystems.BaseEventData {
            
        }
        
    }
    namespace System.Collections.Generic {
        class List$1<T> extends System.Object {
            public Capacity: number;
            public Count: number;
            public constructor();
            public constructor($capacity: number);
            public constructor($collection: System.Collections.Generic.IEnumerable$1<T>);
            public get_Item($index: number):T;
            public set_Item($index: number, $value: T):void;
            public Add($item: T):void;
            public AddRange($collection: System.Collections.Generic.IEnumerable$1<T>):void;
            public AsReadOnly():System.Collections.ObjectModel.ReadOnlyCollection$1<T>;
            public BinarySearch($index: number, $count: number, $item: T, $comparer: System.Collections.Generic.IComparer$1<T>):number;
            public BinarySearch($item: T):number;
            public BinarySearch($item: T, $comparer: System.Collections.Generic.IComparer$1<T>):number;
            public Clear():void;
            public Contains($item: T):boolean;
            public CopyTo($array: System.Array$1<T>):void;
            public CopyTo($index: number, $array: System.Array$1<T>, $arrayIndex: number, $count: number):void;
            public CopyTo($array: System.Array$1<T>, $arrayIndex: number):void;
            public Exists($match: System.Predicate$1<T>):boolean;
            public Find($match: System.Predicate$1<T>):T;
            public FindAll($match: System.Predicate$1<T>):System.Collections.Generic.List$1<T>;
            public FindIndex($match: System.Predicate$1<T>):number;
            public FindIndex($startIndex: number, $match: System.Predicate$1<T>):number;
            public FindIndex($startIndex: number, $count: number, $match: System.Predicate$1<T>):number;
            public FindLast($match: System.Predicate$1<T>):T;
            public FindLastIndex($match: System.Predicate$1<T>):number;
            public FindLastIndex($startIndex: number, $match: System.Predicate$1<T>):number;
            public FindLastIndex($startIndex: number, $count: number, $match: System.Predicate$1<T>):number;
            public ForEach($action: System.Action$1<T>):void;
            public GetEnumerator():System.Collections.Generic.List$1.Enumerator<T>;
            public GetRange($index: number, $count: number):System.Collections.Generic.List$1<T>;
            public IndexOf($item: T):number;
            public IndexOf($item: T, $index: number):number;
            public IndexOf($item: T, $index: number, $count: number):number;
            public Insert($index: number, $item: T):void;
            public InsertRange($index: number, $collection: System.Collections.Generic.IEnumerable$1<T>):void;
            public LastIndexOf($item: T):number;
            public LastIndexOf($item: T, $index: number):number;
            public LastIndexOf($item: T, $index: number, $count: number):number;
            public Remove($item: T):boolean;
            public RemoveAll($match: System.Predicate$1<T>):number;
            public RemoveAt($index: number):void;
            public RemoveRange($index: number, $count: number):void;
            public Reverse():void;
            public Reverse($index: number, $count: number):void;
            public Sort():void;
            public Sort($comparer: System.Collections.Generic.IComparer$1<T>):void;
            public Sort($index: number, $count: number, $comparer: System.Collections.Generic.IComparer$1<T>):void;
            public Sort($comparison: System.Comparison$1<T>):void;
            public ToArray():System.Array$1<T>;
            public TrimExcess():void;
            public TrueForAll($match: System.Predicate$1<T>):boolean;
            
        }
        interface IEnumerable$1<T> {
            
        }
        interface IComparer$1<T> {
            
        }
        class Dictionary$2<TKey,TValue> extends System.Object {
            public Comparer: System.Collections.Generic.IEqualityComparer$1<TKey>;
            public Count: number;
            public Keys: System.Collections.Generic.Dictionary$2.KeyCollection<TKey, TValue>;
            public Values: System.Collections.Generic.Dictionary$2.ValueCollection<TKey, TValue>;
            public constructor();
            public constructor($capacity: number);
            public constructor($comparer: System.Collections.Generic.IEqualityComparer$1<TKey>);
            public constructor($capacity: number, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>);
            public get_Item($key: TKey):TValue;
            public set_Item($key: TKey, $value: TValue):void;
            public Add($key: TKey, $value: TValue):void;
            public Clear():void;
            public ContainsKey($key: TKey):boolean;
            public ContainsValue($value: TValue):boolean;
            public GetEnumerator():System.Collections.Generic.Dictionary$2.Enumerator<TKey, TValue>;
            public GetObjectData($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext):void;
            public OnDeserialization($sender: any):void;
            public Remove($key: TKey):boolean;
            public TryGetValue($key: TKey, $value: $Ref<TValue>):boolean;
            
        }
        interface IEqualityComparer$1<T> {
            
        }
        interface IDictionary$2<TKey,TValue> {
            
        }
        class KeyValuePair$2<TKey,TValue> extends System.ValueType {
            
        }
        
    }
    namespace System.Collections.ObjectModel {
        class ReadOnlyCollection$1<T> extends System.Object {
            
        }
        
    }
    namespace System.Collections.Generic.List$1 {
        class Enumerator<T> extends System.ValueType {
            
        }
        
    }
    namespace System.Reflection {
        class MemberInfo extends System.Object {
            
        }
        class MethodInfo extends System.Reflection.MethodBase {
            
        }
        class MethodBase extends System.Reflection.MemberInfo {
            
        }
        type MemberFilter = (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean;
        var MemberFilter: {new (func: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean): MemberFilter;}
        enum MemberTypes { Constructor = 1, Event = 2, Field = 4, Method = 8, Property = 16, TypeInfo = 32, Custom = 64, NestedType = 128, All = 191 }
        class AssemblyName extends System.Object {
            
        }
        class Assembly extends System.Object {
            
        }
        class Binder extends System.Object {
            
        }
        enum BindingFlags { Default = 0, IgnoreCase = 1, DeclaredOnly = 2, Instance = 4, Static = 8, Public = 16, NonPublic = 32, FlattenHierarchy = 64, InvokeMethod = 256, CreateInstance = 512, GetField = 1024, SetField = 2048, GetProperty = 4096, SetProperty = 8192, PutDispProperty = 16384, PutRefDispProperty = 32768, ExactBinding = 65536, SuppressChangeType = 131072, OptionalParamBinding = 262144, IgnoreReturn = 16777216 }
        class ParameterModifier extends System.ValueType {
            
        }
        class Module extends System.Object {
            
        }
        class ConstructorInfo extends System.Reflection.MethodBase {
            
        }
        enum CallingConventions { Standard = 1, VarArgs = 2, Any = 3, HasThis = 32, ExplicitThis = 64 }
        class FieldInfo extends System.Reflection.MemberInfo {
            
        }
        type TypeFilter = (m: System.Type, filterCriteria: any) => boolean;
        var TypeFilter: {new (func: (m: System.Type, filterCriteria: any) => boolean): TypeFilter;}
        class EventInfo extends System.Reflection.MemberInfo {
            
        }
        class PropertyInfo extends System.Reflection.MemberInfo {
            
        }
        enum TypeAttributes { VisibilityMask = 7, NotPublic = 0, Public = 1, NestedPublic = 2, NestedPrivate = 3, NestedFamily = 4, NestedAssembly = 5, NestedFamANDAssem = 6, NestedFamORAssem = 7, LayoutMask = 24, AutoLayout = 0, SequentialLayout = 8, ExplicitLayout = 16, ClassSemanticsMask = 32, Class = 0, Interface = 32, Abstract = 128, Sealed = 256, SpecialName = 1024, Import = 4096, Serializable = 8192, WindowsRuntime = 16384, StringFormatMask = 196608, AnsiClass = 0, UnicodeClass = 65536, AutoClass = 131072, CustomFormatClass = 196608, CustomFormatMask = 12582912, BeforeFieldInit = 1048576, ReservedMask = 264192, RTSpecialName = 2048, HasSecurity = 262144 }
        enum GenericParameterAttributes { None = 0, VarianceMask = 3, Covariant = 1, Contravariant = 2, SpecialConstraintMask = 28, ReferenceTypeConstraint = 4, NotNullableValueTypeConstraint = 8, DefaultConstructorConstraint = 16 }
        class InterfaceMapping extends System.ValueType {
            
        }
        
    }
    namespace System.Collections {
        interface IComparer {
            
        }
        interface IEnumerator {
            
        }
        
    }
    namespace System.Collections.Generic.Dictionary$2 {
        class KeyCollection<TKey,TValue> extends System.Object {
            
        }
        class ValueCollection<TKey,TValue> extends System.Object {
            
        }
        class Enumerator<TKey,TValue> extends System.ValueType {
            
        }
        
    }
    namespace System.Runtime.Serialization {
        class SerializationInfo extends System.Object {
            
        }
        class StreamingContext extends System.ValueType {
            
        }
        
    }
    namespace UnityEngine.SceneManagement {
        class Scene extends System.ValueType {
            
        }
        
    }
    namespace System.Runtime.InteropServices {
        class StructLayoutAttribute extends System.Attribute {
            
        }
        
    }
    namespace System.Globalization {
        class CultureInfo extends System.Object {
            
        }
        enum DateTimeStyles { None = 0, AllowLeadingWhite = 1, AllowTrailingWhite = 2, AllowInnerWhite = 4, AllowWhiteSpaces = 7, NoCurrentDateDefault = 8, AdjustToUniversal = 16, AssumeLocal = 32, AssumeUniversal = 64, RoundtripKind = 128 }
        class Calendar extends System.Object {
            
        }
        enum TimeSpanStyles { None = 0, AssumeNegative = 1 }
        
    }
    namespace UnityEngine.ParticleSystem {
        class Particle extends System.ValueType {
            
        }
        class MainModule extends System.ValueType {
            public duration: number;
            public loop: boolean;
            public prewarm: boolean;
            public startDelay: UnityEngine.ParticleSystem.MinMaxCurve;
            public startDelayMultiplier: number;
            public startLifetime: UnityEngine.ParticleSystem.MinMaxCurve;
            public startLifetimeMultiplier: number;
            public startSpeed: UnityEngine.ParticleSystem.MinMaxCurve;
            public startSpeedMultiplier: number;
            public startSize3D: boolean;
            public startSize: UnityEngine.ParticleSystem.MinMaxCurve;
            public startSizeMultiplier: number;
            public startSizeX: UnityEngine.ParticleSystem.MinMaxCurve;
            public startSizeXMultiplier: number;
            public startSizeY: UnityEngine.ParticleSystem.MinMaxCurve;
            public startSizeYMultiplier: number;
            public startSizeZ: UnityEngine.ParticleSystem.MinMaxCurve;
            public startSizeZMultiplier: number;
            public startRotation3D: boolean;
            public startRotation: UnityEngine.ParticleSystem.MinMaxCurve;
            public startRotationMultiplier: number;
            public startRotationX: UnityEngine.ParticleSystem.MinMaxCurve;
            public startRotationXMultiplier: number;
            public startRotationY: UnityEngine.ParticleSystem.MinMaxCurve;
            public startRotationYMultiplier: number;
            public startRotationZ: UnityEngine.ParticleSystem.MinMaxCurve;
            public startRotationZMultiplier: number;
            public flipRotation: number;
            public startColor: UnityEngine.ParticleSystem.MinMaxGradient;
            public gravityModifier: UnityEngine.ParticleSystem.MinMaxCurve;
            public gravityModifierMultiplier: number;
            public simulationSpace: UnityEngine.ParticleSystemSimulationSpace;
            public customSimulationSpace: UnityEngine.Transform;
            public simulationSpeed: number;
            public useUnscaledTime: boolean;
            public scalingMode: UnityEngine.ParticleSystemScalingMode;
            public playOnAwake: boolean;
            public maxParticles: number;
            public emitterVelocityMode: UnityEngine.ParticleSystemEmitterVelocityMode;
            public stopAction: UnityEngine.ParticleSystemStopAction;
            public cullingMode: UnityEngine.ParticleSystemCullingMode;
            public ringBufferMode: UnityEngine.ParticleSystemRingBufferMode;
            public ringBufferLoopRange: UnityEngine.Vector2;
            
        }
        class EmissionModule extends System.ValueType {
            
        }
        class ShapeModule extends System.ValueType {
            
        }
        class VelocityOverLifetimeModule extends System.ValueType {
            
        }
        class LimitVelocityOverLifetimeModule extends System.ValueType {
            
        }
        class InheritVelocityModule extends System.ValueType {
            
        }
        class ForceOverLifetimeModule extends System.ValueType {
            
        }
        class ColorOverLifetimeModule extends System.ValueType {
            
        }
        class ColorBySpeedModule extends System.ValueType {
            
        }
        class SizeOverLifetimeModule extends System.ValueType {
            
        }
        class SizeBySpeedModule extends System.ValueType {
            
        }
        class RotationOverLifetimeModule extends System.ValueType {
            
        }
        class RotationBySpeedModule extends System.ValueType {
            
        }
        class ExternalForcesModule extends System.ValueType {
            
        }
        class NoiseModule extends System.ValueType {
            
        }
        class CollisionModule extends System.ValueType {
            
        }
        class TriggerModule extends System.ValueType {
            
        }
        class SubEmittersModule extends System.ValueType {
            
        }
        class TextureSheetAnimationModule extends System.ValueType {
            
        }
        class LightsModule extends System.ValueType {
            
        }
        class TrailModule extends System.ValueType {
            
        }
        class CustomDataModule extends System.ValueType {
            
        }
        class EmitParams extends System.ValueType {
            
        }
        class MinMaxCurve extends System.ValueType {
            
        }
        class MinMaxGradient extends System.ValueType {
            
        }
        
    }
    namespace UnityEngine.Canvas {
        type WillRenderCanvases = () => void;
        var WillRenderCanvases: {new (func: () => void): WillRenderCanvases;}
        
    }
    namespace UnityEngine.Camera {
        type CameraCallback = (cam: UnityEngine.Camera) => void;
        var CameraCallback: {new (func: (cam: UnityEngine.Camera) => void): CameraCallback;}
        enum GateFitMode { Vertical = 1, Horizontal = 2, Fill = 3, Overscan = 4, None = 0 }
        enum MonoOrStereoscopicEye { Left = 0, Right = 1, Mono = 2 }
        class GateFitParameters extends System.ValueType {
            
        }
        enum StereoscopicEye { Left = 0, Right = 1 }
        
    }
    namespace UnityEngine.Rendering {
        enum OpaqueSortMode { Default = 0, FrontToBack = 1, NoDistanceSort = 2 }
        enum CameraEvent { BeforeDepthTexture = 0, AfterDepthTexture = 1, BeforeDepthNormalsTexture = 2, AfterDepthNormalsTexture = 3, BeforeGBuffer = 4, AfterGBuffer = 5, BeforeLighting = 6, AfterLighting = 7, BeforeFinalPass = 8, AfterFinalPass = 9, BeforeForwardOpaque = 10, AfterForwardOpaque = 11, BeforeImageEffectsOpaque = 12, AfterImageEffectsOpaque = 13, BeforeSkybox = 14, AfterSkybox = 15, BeforeForwardAlpha = 16, AfterForwardAlpha = 17, BeforeImageEffects = 18, AfterImageEffects = 19, AfterEverything = 20, BeforeReflections = 21, AfterReflections = 22, BeforeHaloAndLensFlares = 23, AfterHaloAndLensFlares = 24 }
        class CommandBuffer extends System.Object {
            
        }
        enum ComputeQueueType { Default = 0, Background = 1, Urgent = 2 }
        
    }
    namespace UnityEngine.Audio {
        class AudioMixerGroup extends UnityEngine.Object {
            
        }
        
    }
    namespace UnityEngine.Application {
        type AdvertisingIdentifierCallback = (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void;
        var AdvertisingIdentifierCallback: {new (func: (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void): AdvertisingIdentifierCallback;}
        type LowMemoryCallback = () => void;
        var LowMemoryCallback: {new (func: () => void): LowMemoryCallback;}
        type LogCallback = (condition: string, stackTrace: string, type: UnityEngine.LogType) => void;
        var LogCallback: {new (func: (condition: string, stackTrace: string, type: UnityEngine.LogType) => void): LogCallback;}
        
    }
    namespace UnityEngine.Events {
        type UnityAction = () => void;
        var UnityAction: {new (func: () => void): UnityAction;}
        class UnityEvent extends UnityEngine.Events.UnityEventBase {
            public constructor();
            public AddListener($call: UnityEngine.Events.UnityAction):void;
            public RemoveListener($call: UnityEngine.Events.UnityAction):void;
            public Invoke():void;
            
        }
        class UnityEventBase extends System.Object {
            
        }
        class UnityEvent$1<T0> extends UnityEngine.Events.UnityEventBase {
            public AddListener($call: UnityEngine.Events.UnityAction$1<T0>):void;
            public RemoveListener($call: UnityEngine.Events.UnityAction$1<T0>):void;
            public Invoke($arg0: T0):void;
            
        }
        type UnityAction$1<T0> = (arg0: T0) => void;
        
    }
    namespace PuertsBeefBallSDK {
        class Prefab extends System.Object {
            public gameObject: UnityEngine.GameObject;
            public constructor();
            public Instantiate():UnityEngine.GameObject;
            
        }
        class RemoteResource extends System.Object {
            public resource: UnityEngine.Object;
            public resourcePath: string;
            public constructor();
            
        }
        
    }
    namespace UnityEngine.UI.Selectable {
        enum Transition { None = 0, ColorTint = 1, SpriteSwap = 2, Animation = 3 }
        
    }
    namespace UnityEngine.UI.Button {
        class ButtonClickedEvent extends UnityEngine.Events.UnityEvent {
            public constructor();
            
        }
        
    }
    namespace UnityEngine.UI.InputField {
        class SubmitEvent extends UnityEngine.Events.UnityEvent$1<string> {
            
        }
        class OnChangeEvent extends UnityEngine.Events.UnityEvent$1<string> {
            
        }
        type OnValidateInput = (text: string, charIndex: number, addedChar: number) => number;
        var OnValidateInput: {new (func: (text: string, charIndex: number, addedChar: number) => number): OnValidateInput;}
        enum ContentType { Standard = 0, Autocorrected = 1, IntegerNumber = 2, DecimalNumber = 3, Alphanumeric = 4, Name = 5, EmailAddress = 6, Password = 7, Pin = 8, Custom = 9 }
        enum LineType { SingleLine = 0, MultiLineSubmit = 1, MultiLineNewline = 2 }
        enum InputType { Standard = 0, AutoCorrect = 1, Password = 2 }
        enum CharacterValidation { None = 0, Integer = 1, Decimal = 2, Alphanumeric = 3, Name = 4, EmailAddress = 5 }
        
    }
    namespace UnityEngine.UI.Toggle {
        enum ToggleTransition { None = 0, Fade = 1 }
        class ToggleEvent extends UnityEngine.Events.UnityEvent$1<boolean> {
            public constructor();
            
        }
        
    }
    
}