// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    // Adding a recipe for Bottled Fire
    event.recipes.createMixing('kubejs:bottled_fire', [
        'minecraft:glass_bottle',
        'minecraft:blaze_powder',
        'minecraft:fire_charge',
        Fluid.of('minecraft:lava', 250)
      ]).superheated()})

