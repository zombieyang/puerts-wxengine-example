export default class ShellPool {
    static m_freeShellList: CS.UnityEngine.GameObject[] = [];

    public static Create(
        original: PuertsBeefBallSDK.Prefab,
        position: CS.UnityEngine.Vector3,
        rotation: CS.UnityEngine.Quaternion
    ): CS.UnityEngine.GameObject {

        if (ShellPool.m_freeShellList.length == 0) {

            var gameObject: CS.UnityEngine.GameObject = original.Instantiate();
            gameObject.transform.position = position;
            gameObject.transform.rotation = rotation;

            gameObject.SetActive(true);
            return gameObject;
        }
        else {
            var gameObject = ShellPool.m_freeShellList[ShellPool.m_freeShellList.length - 1];
            ShellPool.m_freeShellList.pop(/*ShellPool.m_freeShellList.length - 1*/);
            gameObject.SetActive(true);
            gameObject.transform.position = position;
            gameObject.transform.rotation = rotation;

            return gameObject;
        }
    }
    public static Destroy(gameObject: CS.UnityEngine.GameObject): void {
        gameObject.SetActive(false);
        ShellPool.m_freeShellList.push(gameObject);
    }
}