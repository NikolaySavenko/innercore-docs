
/**
 * Type used to mark Java bytes
 */
type jbyte = number;

/**
 * Object representing the set of coordinates in the three-dimensional world
 */
interface Vector {
    x: number,
    y: number,
    z: number
}

/**
 * Object representing coordinate set with side data
 */
interface BlockPosition extends Vector {
    /**
     * Side of the block, one of the [[Native.BlockSide]] constants
     */
    side: number
}

/**
 * Object representing RGB color
 */
interface Color {
    r: number,
    g: number,
    b: number
}

/**
 * Object representing pitch/yaw angle set
 */
interface LookAngle {
    pitch: number,
    yaw: number
}

/**
 * Object representing item instance in the inventory
 */
interface ItemInstance {
    id: number,
    count: number, 
    /**
     * Item data value. Generally specifies some property of the item, e.g. 
     * color, material, etc. Defaults to 0, in many cases -1 means "any data 
     * value"
     */
    data: number,

    /**
     * Item extra data. Contains some additional item data such as enchants, 
     * custom item name or some additional properties
     */
    extra?: ItemExtra
}

/**
 * Array of theee elements representing item id, count and data respectively. 
 * Used in many old functions and when extra data is not required
 */
type ItemInstanceArray = number[];

/**
 * Class representing item extra data
 */
declare class ItemExtra {

}

/**
 * Object representing block in the world
 */
interface Tile {
    id: number,
    data: number
}

/**
 * Object representing current weather in the world
 */
interface Weather {
    /**
     * Current rain level, from 0 (no rain) to 10 (heavy rain)
     */
    rain: number,
    /**
     * Current lightning level, from 0 (no ligntning) to 10
     */
    thunder: number
}

/**
 * Class representing TileEntity in the worls
 */
declare class TileEntity {

}

declare class NativeTileEntity {

}

declare class CustomEntity {

}