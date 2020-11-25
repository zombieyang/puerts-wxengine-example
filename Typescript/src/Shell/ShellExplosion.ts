import TankHealth from "../Tank/TankHealth";
import ShellPool from "./ShellPool";

export default class ShellExplosion extends PuertsLogic<CS.PuertsTest.ShellExplosion> {

    private m_boxCollider: CS.UnityEngine.BoxCollider = null;

    constructor(mono) {
        super(mono);
        this.behaviour.JsReset = this.Reset.bind(this);
        this.behaviour.JsOnTriggerEnter = this.OnTriggerEnter.bind(this);
    }

    lastT: Date = new Date;
    m_spawnTime: Date = new Date;
    Start(): void {
        // If it isn't destroyed by then, destroy the shell after it's lifetime.
        //Destroy (gameObject, m_MaxLifeTime);
        this.Reset();
        this.m_boxCollider = this.behaviour.GetComponent(puerts.$typeof(CS.UnityEngine.BoxCollider)) as CS.UnityEngine.BoxCollider;
    }

    public Reset(): void {
        this.lastT = new Date;
        this.m_spawnTime = new Date;
    }
    Update(): void {
        var time = new Date;
        var dt = (time.getTime() - this.lastT.getTime()) / 1000;
        var lifeTime = (time.getTime() - this.m_spawnTime.getTime()) / 1000;

        if (lifeTime >= this.behaviour.m_MaxLifeTime) {
            ShellPool.Destroy(this.behaviour.gameObject);
        }
        else {
            // CS.UnityEngine.Debug.Log(dt * 20);
            this.behaviour.transform.position = CS.UnityEngine.Vector3.op_Addition(
                this.behaviour.transform.position,
                CS.UnityEngine.Vector3.op_Multiply(dt * 20, this.behaviour.transform.forward)
            )
            var other = (this.behaviour.m_PhyWorld as any).jsBehaviour.CheckCollideWithPlayer(this.m_boxCollider, this.behaviour.m_PlayerNumber);
            if (other != null) {
                (other.GetComponent(puerts.$typeof(CS.PuertsTest.TankHealth)).jsBehaviour as TankHealth).TakeDamage(30);
                // CS.UnityEngine.Debug.Log("bullet intersect: " + other.name.ToString());
            }
        }
        this.lastT = time;
    }

    private OnTriggerEnter(): void {
        // Collect all the colliders in a sphere from the shell's current position to a radius of the explosion radius.
        var colliders: CS.System.Array = CS.UnityEngine.Physics.OverlapSphere(
            this.behaviour.transform.position,
            this.behaviour.m_ExplosionRadius,
            this.behaviour.m_TankMask as any
        );

        // Go through all the colliders...
        for (let i = 0; i < colliders.Length; i++) {
            // ... and find their rigidbody.
            var targetRigidbody: CS.UnityEngine.Rigidbody = (colliders[i] as CS.UnityEngine.Collider).GetComponent(puerts.$typeof(CS.UnityEngine.Rigidbody)) as CS.UnityEngine.Rigidbody;

            // If they don't have a rigidbody, go on to the next collider.
            if (!targetRigidbody)
                continue;

            // Add an explosion force.
            targetRigidbody.AddExplosionForce(
                this.behaviour.m_ExplosionForce,
                this.behaviour.transform.position,
                this.behaviour.m_ExplosionRadius
            );

            // Find the TankHealth script associated with the rigidbody.
            var targetHealth: CS.PuertsTest.TankHealth = targetRigidbody.GetComponent(puerts.$typeof(CS.PuertsTest.TankHealth)) as CS.PuertsTest.TankHealth;

            // If there is no TankHealth script attached to the gameobject, go on to the next collider.
            if (!targetHealth)
                continue;

            // Calculate the amount of damage the target should take based on it's distance from the shell.
            var damage: number = this.CalculateDamage(targetRigidbody.position);

            // Deal this damage to the tank.
            (targetHealth as any).jsBehaviour.TakeDamage(damage);
        }

        // Unparent the particles from the shell.
        this.behaviour.m_ExplosionParticles.transform.parent = null;

        // Play the particle system.
        this.behaviour.m_ExplosionParticles.Play();

        // Play the explosion sound effect.
        // this.behaviour.m_ExplosionAudio.Play();

        // Once the particles have finished, destroy the gameobject they are on.
        var mainModule: CS.UnityEngine.ParticleSystem.MainModule = (this.behaviour as any).m_ExplosionParticles.main;
        CS.UnityEngine.Object.Destroy(
            this.behaviour.m_ExplosionParticles.gameObject,
            mainModule.duration
        );

        // Destroy the shell.

    // public static void Destroy(GameObject gameObject)
    // {
    //   gameObject.SetActive(false);
    //   m_freeShellList.Add(gameObject);
    // }
        // CS.PuertsTest.ShellPool.Destroy()
        CS.UnityEngine.Object.Destroy(this.behaviour.gameObject);
    }


    private CalculateDamage(targetPosition: CS.UnityEngine.Vector3): number {
        // Create a vector from the shell to the target.
        var explosionToTarget: CS.UnityEngine.Vector3 = CS.UnityEngine.Vector3.op_Subtraction(
            targetPosition,
            this.behaviour.transform.position
        );

        // Calculate the distance from the shell to the target.
        var explosionDistance: number = explosionToTarget.magnitude;

        // Calculate the proportion of the maximum distance (the explosionRadius) the target is away.
        var relativeDistance: number = (this.behaviour.m_ExplosionRadius - explosionDistance) / (this.behaviour as any).m_ExplosionRadius;

        // Calculate damage as this proportion of the maximum possible damage.
        var damage: number = relativeDistance * this.behaviour.m_MaxDamage;

        // Make sure that the minimum damage is always 0.
        damage = CS.UnityEngine.Mathf.Max(0, damage);

        return damage;
    }
}