/**
 * Module used to handle callbacks. See {@page Callbacks} for details about the 
 * callback mechanism and the list of pre-defined callbacks
 */
declare namespace Callback {

    /**
     * Adds callback function for the specified callback name. Most of native 
     * events can be prevented using [[Game.prevent]] call.
     * @param name callback name, should be one of the pre-defined or a custom
     * name if invoked via [[Callback.invokeCallback]]
     * @param func function to be called when an event occures
     */
    function addCallback(name: string, func: Function): void;

    /**
     * Invokes callback with any name and up to 10 additional parameters. You
     * should not generally call pre-defined callbacks until you really need to 
     * do so. If you want to trigger some event in your mode, use your own 
     * callback names
     * @param name callback name
     */
    function invokeCallback(name: string, o1?: any, o2?: any, o3?: any, o4?: any, o5?: any, o6?: any, o7?: any, o8?: any, o9?: any, o10?: any): void;


    /**
     * Function used in "CraftRecipePreProvided" callback
     * @param recipe object containing recipe information
     * @param field object containing crafting field information
     */
    interface CraftRecipePreProvidedFunction {
        (recipe: Recipes.WorkbenchRecipe, field: Recipes.WorkbenchField): void
    }

    /**
     * Function used in "CraftRecipeProvided" callback
     * @param recipe object containing recipe information
     * @param field object containing crafting field information
     * @param isPrevented if true, recipe was prevented by craft function
     */
    interface CraftRecipeProvidedFunction {
        (recipe: Recipes.WorkbenchRecipe, field: Recipes.WorkbenchField, isPrevented: boolean): void
    }


    /**
     * Function used in "VanillaWorkbenchCraft" and "VanillaWorkbenchPostCraft" 
     * callbacks
     * @param result recipe result item
     * @param workbenchContainer workbench container instance
     */
    interface VanillaWorkbenchCraftFunction {
        (result: ItemInstance, workbenchContainer: UI.Container): void
    }


    /**
     * Function used in "VanillaWorkbenchRecipeSelected" callback
     * @param recipe object containing recipe information
     * @param result recipe result item
     * @param workbenchContainer workbench container instance
     */
    interface VanillaWorkbenchRecipeSelectedFunction {
        (recipe: Recipes.WorkbenchRecipe, result: ItemInstance, workbenchContainer: UI.Container)
    }


    /**
     * Function used in "ContainerClosed" callback
     * @param container container that was closed
     * @param window window that was loaded in the container
     * @param byUser if true, container was closed by user, from the code 
     * otherwise
     */
    interface ContainerClosedFunction {
        (container: UI.Container, window: UI.IWindow, byUser: boolean): void
    }


    /**
     * Function used in "ContainerOpened" callback
     * @param container container that was opened
     * @param window window that was loaded in the container
     */
    interface ContainerOpenedFunction {
        (container: UI.Container, window: UI.IWindow): void
    }


    /**
     * Funciton used in "CustomWindowOpened" callback
     * @param window window that was opened
     */
    interface CustomWindowOpenedFunction {
        (window: UI.IWindow): void;
    }

    
    /**
     * Funciton used in "CustomWindowClosed" callback
     * @param window window that was closed
     */
    interface CustomWindowClosedFunction {
        (window: UI.IWindow): void;
    }


    /**
     * Function used in "CoreConfigured" callback
     * @param config Inner Core default config instance
     */
    interface CoreConfiguredFunction {
        (config: Config): void;
    }


    /**
     * Function used in "LevelSelected" callback
     * @param worldName name of the selected world
     * @param worldDir name of the directory where the world is stored. Worlds
     * directories are located at games/horizon/minecraftWorlds/
     */
    interface LevelSelectedFunction {
        (worldName: string, worldDir: string): void
    }


    /**
     * Function used in "DimensionLoaded" callback
     * @param dimension vanilla dimension id, one of the [[Native.Dimension]]
     * values, or custom dimension id
     */
    interface DimensionLoadedFunction {
        (dimension: number): void
    }


    /**
     * Function used in "DestroyBlock" and "DestroyBlockStart" callbacks
     * @param coords coordinates where the block is destroyed and side from
     * where it is destroyed
     * @param block block that is destroyed
     * @param player player entity unique numeric id
     */
    interface DestroyBlockFunction {
        (coords: ItemUseCoordinates, block: Tile, player: number): void
    }


    /**
     * Function used in "DestroyBlockContinue" callback 
     * @param coords coordinates where the block is destroyed and side from
     * where it is destroyed
     * @param block block that is destroyed
     * @param progress current fraction of breaking progress
     */
    interface DestroyBlockContinueFunction {
        (coords: ItemUseCoordinates, block: Tile, progress: number): void
    }


    /**
     * Function used in "BuildBlock" callback
     * @param coords coordinates where the block is placed and side from
     * where it is placed
     * @param block block that is placed
     * @param player player entity unique numeric id
     */
    interface BuildBlockFunction {
        (coords: ItemUseCoordinates, block: Tile, player: number): void
    }

    /**
     * Function used in "BlockChanged" callback
     * @param coords coordinates where block change occured
     * @param oldBlock the block that is being replaced 
     * @param newBlock replacement block
     * @param i1 some integer
     * @param i2 some integer
     */
    interface BlockChangedFunction {
        (coords: Vector, oldBlock: Tile, newBlock: Tile, i1: number, i2: number): void
    }


    /**
     * Function used in "ItemUse" and "ItemUseLocalServer" callbacks
     * @param coords set of all coordinate values that can be useful to write 
     * custom use logics
     * @param item item that was in the player's hand when he touched the block
     * @param block block that was touched
     * @param isExternal if true, the event was triggerd by the remote player,
     * else by local player
     */
    interface ItemUseFunction {
        (coords: ItemUseCoordinates, item: ItemInstance, block: Tile, isExternal: boolean|undefined): void
    }

    /**
     * Function used in "Explosion" callback
     * @param coords coordinates of the explosion
     * @param params additional explosion data
     * @param params.power explosion power
     * @param params.entity if explosion is produced by an entity, entity unique
     * id, -1 otherwise
     * @param onFire if true, explosion produced the fire
     * @param someBool some boolean value
     * @param someFloat some floating point value
     */
    interface ExplosionFunction {
        (coords: Vector, params: {power: number, entity: number, onFire: boolean, someBool: boolean, someFloat: number}): void
    }

    /**
     * Function used in the "FoodEaten" callback. You can use 
     * [[Player.getCarriedItem]] to get info about food item
     * @param food food amount produced by eaten food
     * @param ratio saturation ratio produced by food
     */
    interface FoodEatenFunction {
        (food: number, ratio: number): void
    }

    /**
     * Function used in "ExpAdd" callback
     * @param exp amount of experience to be added 
     */
    interface ExpAddFunciton {
        (exp: number): void
    }

    /**
     * Function used in "ExpLevelAdd" callback
     * @param level amount of levels to be added 
     */
    interface ExpLevelAddFunciton {
        (level: number): void
    }

    /**
     * Function used in "NativeCommand" callback
     * @param command command that was entered or null if no command was 
     * provided
     */
    interface NativeCommandFunciton {
        (command: string|null): void
    }

    /**
     * Function used in "PlayerAttack" callback
     * @param attacker player entity unique id
     * @param victim attacked entity unique id
     */
    interface PlayerAttackFunction {
        (attacker: number, victim: number): void
    }

    /**
     * Function used in "EntityAdded" callback
     * @param entity entity unique id
     */
    interface EntityAddedFunction {
        (entity: number): void
    }


    /**
     * Function used in "EntityRemoved" callback
     * @param entity entity unique id
     */
    interface EntityRemovedFunction {
        (entity: number): void
    }

    /**
     * Function used in "EntityDeath" callback
     * @param entity entity that is dead
     * @param attacker if the entity was killed by another entity, attacker's 
     * entity unique id, -1 otherwise
     * @param damageType damage source id
     */
    interface EntityDeathFunction {
        (entity: number, attacker: number, damageType: number): void
    }

    
    /**
     * Function used in "EntityHurt" callback
     * @param attacker if an entity was hurt by another entity, attacker's 
     * unique id, -1 otherwise
     * @param entity entity that is hurt
     * @param damageValue amount of damage produced to entity
     * @param damageType damage source id
     * @param someBool1 some boolean value
     * @param someBool2 some boolean value
     */
    interface EntityHurtFunction {
        (attacker: number, entity: number, damageValue: number, damageType: number, someBool1: boolean, someBool2: boolean): void
    }


    /**
     * Function used in "EntityInteract" callback
     * @param entity entity unique id
     * @param player player entity unique id
     */
    interface EntityInteractFunction {
        (entity: number, player: number): void
    }


    /**
     * Function used in "ProjectileHit" callback
     * @param projectile projectile entity unique ID
     * @param item projectile item
     * @param target object containing hit coordinates and information about 
     * hit entity/block
     */
    interface ProjectileHitFunction {
        (projectile: number, item: ItemInstance, target: ProjectileHitTarget): void
    }


    /**
     * Function used in "RedstoneSignal" callback
     * @param coords coordinates where redstone signal changed
     * @param params information about redstone signal
     * @param params.power redstone signal power
     * @param params.signal same as params.power
     * @param params.onLoad always true
     * @param block information aboit the block on the specified coordinates
     */
    interface RedstoneSignalFunction {
        (coords: Vector, params: {power: number, signal: number, onLoad: boolean}, block: Tile): void
    }

    
    /**
     * Funciton used in "PopBlockResources" callback
     * @param coords coordinates of the block that was broken
     * @param block information about the block that was broken
     * @param f some floating point value
     * @param i some integer value
     */
    interface PopBlockResourcesFunction {
        (coords: Vector, block: Tile, f: number, i: number): void
    }


    /**
     * Function used in "ItemIconOverride" callback
     * @param item information about item that is used in override function
     * @returns void if used in callback, [[Item.TextureData]] if used in item 
     * override function to return texture that will be used for the item
     */
    interface ItemIconOverrideFunction {
        (item: ItemInstance): void|Item.TextureData
    }


    /**
     * Function used in "ItemNameOverride" callback
     * @param item information about item that is used in override function
     * @param translation translated item name
     * @param name original item name
     * @returns void if used in callback, string if used in item override 
     * function to return new name that will be displayed
     */
    interface ItemNameOverrideFunction {
        (item: ItemInstance, translation: string, name: string): void|string;
    }    


    /**
     * Function used in "ItemUseNoTarget" callback
     * @param item item that was in the player's hand when the event occured
     * @param ticks amount of ticks player kept touching screen
     */
    interface ItemUseNoTargetFunction {
        (item: ItemInstance, ticks: number): void
    }


    /**
     * Function used in "ItemUsingReleased" callback
     * @param item item that was in the player's hand when the event occured
     * @param ticks amount of ticks left to the specified max use duration value
     */
    interface ItemUsingReleasedFunction {
        (item: ItemInstance, ticks: number): void
    }


    /**
     * Function used in "ItemUsingComplete" callback
     * @param item item that was in the player's hand when the event occured
     */
    interface ItemUsingCompleteFunction {
        (item: ItemInstance): void
    }


    /**
     * Function used in "ItemDispensed" callback
     * @param coords coordinates of the spawned drop item entity
     * @param item item that was dispensed
     */
    interface ItemDispensedFunction {
        (coords: ItemUseCoordinates, item: ItemInstance): void
    }


    /**
     * Function used in "NativeGuiChanged" callback
     * @param name current screen name
     * @param lastName previous screen name
     * @param isPushEvent if true, the new screen was pushed on the Minecraft 
     * screens stack, poped from the stack otherwise
     */
    interface NativeGuiChangedFunction {
        (name: string, lastName: string, isPushEvent: string): void
    }


    /**
     * Function used in all generation callbacks
     * @param chunkX chunk X coordinate. Multiply by 16 to receive corner block 
     * coordinates
     * @param chunkY chunk Y coordinate. Multiply by 16 to receive corner block 
     * coordinates
     * @param random java.util.Random object that should be used for generation
     * process. Already seeded by appropriate values
     * @param dimensionId current dimension's numeric id
     * @param chunkSeed chunk-specific seed to use in chunk random generation
     * @param chunkSeed world-specific seed to use in chunk generation's
     * @param dimensionSeed dimension-specific seed to use in chunk generation's
     */
    interface GenerateChunkFunction {
        (chunkX: number, chunkZ: number, random: java.util.Random, 
            dimensionId: number, chunkSeed: number, worldSeed: number, dimensionSeed: number): void
    }


    /**
     * Function used in "ReadSaves" and "WriteSaves" callbacks
     * Avoid modifying values directly, consider using [[Saver]] instead
     */
    interface SavesFunction {
        (globalScope: object): void
    }


    /**
     * Object containing hit coordinates and information about hit entity/block
     */
    interface ProjectileHitTarget {
        /**
         * Exact hit position x 
         */
        x: number, 
        /**
         * Exact hit position y
         */
        y: number, 
        /**
         * Exact hit position z
         */
        z: number,
        /**
         * If an entity was hit, entity unique id, -1 otherwise
         */
        entity: number,
        /**
         * Coordinates and side of the hit block or null if an entity was hit
         */
        coords: null|ItemUseCoordinates
    } 
    
    /**
     * Object used in some callbacks for coordinate set with side information 
     * and relative coordinates set
     */
    interface ItemUseCoordinates extends BlockPosition {
        /**
         * Relative coordinates, coordinates of the block to the specified side 
         * of current block
         */
        relative: Vector,
        /**
         * Exact touch point, absolute point coordinates. Used only in "ItemUse"
         * callback
         */
        vec?: Vector
    }
}
