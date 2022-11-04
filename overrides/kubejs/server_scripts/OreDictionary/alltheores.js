// This script was made by choombdev for Odyssey 3, reusing it without explicit permission is not allowed.

onEvent('recipes', event =>{

 // Registering List of Materials
 var materials = ['aluminum', 'netherite', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc', 'iridium', 'steel', 'invar', 'electrum', 'bronze', 'enderium', 'lumium', 'signalum', 'constantan', 'brass', 'sapphire']
 // Looping through Materials
 for (let material in materials) {
   // Forge Dictionaries
    ReplaceItem('#forge:ingots/' + material,  'alltheores:'+ material + '_ingot')
    ReplaceItem('#forge:ores/' + material,  'alltheores:'+ material + '_ore')
    ReplaceItem('#forge:gears/' + material,  'alltheores:'+ material + '_gear')
    ReplaceItem('#forge:shards/' + material,  'alltheores:'+ material + '_shard')
    ReplaceItem('#forge:crystals/' + material,  'alltheores:'+ material + '_crystal')
    ReplaceItem('#forge:clumps/' + material,  'alltheores:'+ material + '_clump')
    ReplaceItem('#forge:dirty_dusts/' + material,  'alltheores:dirty_'+ material + '_dust')
    ReplaceItem('#forge:dusts/' + material,  'alltheores:'+ material + '_dust')
    ReplaceItem('#forge:plates/' + material,  'alltheores:'+ material + '_plate')
    ReplaceItem('#forge:nuggets/' + material,  'alltheores:'+ material + '_nugget')
    ReplaceItem('#forge:storage_blocks/' + material,  'alltheores:'+ material + '_block')
    ReplaceItem('#forge:raw_ores/' + material,  'alltheores:raw_'+ material)
    ReplaceItem('#forge:raw_materials/' + material,  'alltheores:raw_'+ material)
 }


 function ReplaceItem(x,y) {
   if ( !Item.of(y).isEmpty() || !Item.of(x).isEmpty() ){
      event.replaceOutput({},x,y)}
      event.replaceInput({},x,y)
   }
})