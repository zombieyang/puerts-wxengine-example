export default class TankHealth extends PuertsLogic<CS.PuertsTest.TankHealth> {

    // private m_ExplosionAudio: CS.UnityEngine.AudioSource;               // The audio source to play when the tank explodes.
    private m_ExplosionParticles: CS.UnityEngine.ParticleSystem;        // The particle system the will play when the tank is destroyed.
    private m_CurrentHealth: number;                      // How much health the tank currently has.
    private m_Dead: boolean;                                // Has the tank been reduced beyond zero health yet?
    private m_ExplosionPrefab: PuertsBeefBallSDK.Prefab;
    
    constructor(mono) {
        super(mono);
    }

    Awake(): void {
        // Instantiate the explosion prefab and get a reference to the particle system on it.

        if (this.behaviour.m_ExplosionPrefabPath) {
            PuertsBeefBallSDK
                .load<PuertsBeefBallSDK.Prefab>(this.behaviour.m_ExplosionPrefabPath)
                .then((prefab: PuertsBeefBallSDK.Prefab)=> {
                    const gameObject = prefab.Instantiate();

                    // Get a reference to the audio source on the instantiated prefab.
                    // this.m_ExplosionAudio = this.m_ExplosionParticles.GetComponent(puerts.$typeof(CS.UnityEngine.AudioSource)) as CS.UnityEngine.AudioSource;
                    this.m_ExplosionParticles = gameObject.GetComponent(puerts.$typeof(CS.UnityEngine.ParticleSystem)) as CS.UnityEngine.ParticleSystem;

                    // Disable the prefab so it can be activated when it's required.
                    this.m_ExplosionParticles.gameObject.SetActive(false);
                })
                .catch(err=> {
                    CS.UnityEngine.Debug.LogError(err.message);
                })
        }
    }


    OnEnable(): void {
        // When the tank is enabled, reset the tank's health and whether or not it's dead.
        this.m_CurrentHealth = this.behaviour.m_StartingHealth;
        this.m_Dead = false;

        // Update the health slider's value and color.
        this.SetHealthUI();
    }


    public TakeDamage(amount: number): void {
        // Reduce current health by the amount of damage done.
        this.m_CurrentHealth -= amount;

        // Change the UI elements appropriately.
        this.SetHealthUI();

        // If the current health is at or below zero and it has not yet been registered, call OnDeath.
        if (this.m_CurrentHealth <= 0 && !this.m_Dead)
        {
            this.OnDeath();
        }
    }


    private SetHealthUI(): void {
        // Set the slider's value appropriately.
        //m_Slider.value = m_CurrentHealth;

        // Interpolate the color of the bar between the choosen colours based on the current percentage of the starting health.
        //m_FillImage.color = Color.Lerp (m_ZeroHealthColor, m_FullHealthColor, m_CurrentHealth / m_StartingHealth);
    }


    private OnDeath(): void {
        // Set the flag so that this function is only called once.
        this.m_Dead = true;

        if (this.m_ExplosionParticles) {
            // Move the instantiated explosion prefab to the tank's position and turn it on.
            this.m_ExplosionParticles.transform.position = this.behaviour.transform.position;
            this.m_ExplosionParticles.gameObject.SetActive(true);
    
            // Play the particle system of the tank exploding.
            this.m_ExplosionParticles.Play();
        }

        // Play the tank explosion sound effect.
        // this.m_ExplosionAudio.Play();

        // Turn the tank off.
        this.behaviour.gameObject.SetActive(false);
    }
}