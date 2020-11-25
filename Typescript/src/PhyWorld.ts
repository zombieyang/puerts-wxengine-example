
export class AABBInfo {
    public minX: number;
    public minY: number;
    public minZ: number;
    public maxX: number;
    public maxY: number;
    public maxZ: number;
}
export class BoxEntity {
    public collider: CS.UnityEngine.BoxCollider;
    public aabb: AABBInfo;
}
export default class PhyWorld extends PuertsLogic<CS.PuertsTest.PhyWorld>{

    m_staticEntities: Array<BoxEntity> = [];
    m_bulletEntities: Array<CS.UnityEngine.BoxCollider> = [];
    m_playerEntities: Array<BoxEntity> = [];

    private GetAABB(box: CS.UnityEngine.BoxCollider): AABBInfo {
        var pos: CS.UnityEngine.Vector3 = CS.UnityEngine.Vector3.op_Addition(box.center, box.transform.position);
        var aabb: AABBInfo = new AABBInfo();
        aabb.minX = pos.x - box.size.x / 2;
        aabb.minY = pos.y - box.size.y / 2;
        aabb.minZ = pos.z - box.size.z / 2;
        aabb.maxX = pos.x + box.size.x / 2;
        aabb.maxY = pos.y + box.size.y / 2;
        aabb.maxZ = pos.z + box.size.z / 2;
        return aabb;
    }
    Start(): void {
        var comps = this.behaviour.StaticWorld.GetComponentsInChildren(puerts.$typeof(CS.UnityEngine.BoxCollider));
        for (let i = 0; i < comps.Length; i++) {
            var box = comps[i] as CS.UnityEngine.BoxCollider
            var entity: BoxEntity = new BoxEntity();
            entity.collider = comps[i];
            entity.aabb = this.GetAABB(box);
            this.m_staticEntities.push(entity);
        }
    }
    public AddPlayer(box: CS.UnityEngine.BoxCollider): void {
        var entity: BoxEntity = new BoxEntity();
        entity.collider = box;
        entity.aabb = this.GetAABB(box);
        this.m_playerEntities.push(entity);
    }
    public CheckCollideWithPlayer(box: CS.UnityEngine.BoxCollider, playerNum: number): CS.UnityEngine.BoxCollider {
        var a = this.GetAABB(box);
        for (let i = 0; i < this.m_playerEntities.length; i++) {
            const entity = this.m_playerEntities[i];
            if (playerNum == (entity.collider.gameObject.GetComponent(puerts.$typeof(CS.PuertsTest.TankShooting)) as CS.PuertsTest.TankShooting).m_PlayerNumber) {
                continue;
            }
            var b = this.GetAABB(entity.collider);
            if ((a.minX <= b.maxX && a.maxX >= b.minX) &&
                (a.minY <= b.maxY && a.maxY >= b.minY) &&
                (a.minZ <= b.maxZ && a.maxZ >= b.minZ)) {
                return entity.collider;
            }
        }
        return null;
    }
    public CheckCollideWithStatic(box: CS.UnityEngine.BoxCollider): CS.UnityEngine.BoxCollider {
        var a = this.GetAABB(box);
        for (let i = 0; i < this.m_staticEntities.length; i++) {
            const entity = this.m_staticEntities[i];
            var b = entity.aabb;
            if ((a.minX <= b.maxX && a.maxX >= b.minX) &&
                (a.minY <= b.maxY && a.maxY >= b.minY) &&
                (a.minZ <= b.maxZ && a.maxZ >= b.minZ)) {
                return entity.collider;
            }
        }
        return null;
    }
}