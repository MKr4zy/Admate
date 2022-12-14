onEvent('jei.hide.items', event => {

	// Creative items
	//event.hide('/^creative$/')
	
	// Alkashetry Tome
	event.hide('reliquary:alkahestry_tome')
	
	// Uncrafting Table
	event.hide('twilightforest:uncrafting_table')
	event.hide('cyclic:uncrafter')

	// AE2 Facades
	//event.hide(Item.of('ae2:facade').ignoreNBT())
	//event.hide(/^ae2:facade$/)

	// Tinker's Construct 
	event.hide('#tconstruct:modifiable')
	event.hide(Item.of('tconstruct:potion_bucket').ignoreNBT())

	// Mekanism Tanks
	event.hide(Item.of('mekanism:creative_chemical_tank').ignoreNBT())
	event.hide(Item.of('mekanism:creative_fluid_tank').ignoreNBT())

	// Rainbow Furnace
	event.hide('ironfurnaces:million_furnace')
	event.hide('ironfurnaces:rainbow_plating')
	event.hide('ironfurnaces:rainbow_core')
	
	// Bamboo Spiked Tips
	event.hide('supplementaries:bamboo_spikes_tipped')

	// Reliquary Magazines
	event.hide(Item.of('reliquary:neutral_magazine').ignoreNBT())
	event.hide(Item.of('reliquary:neutral_bullet').ignoreNBT())

// Colored Blocks
			const colors = [
				'cyan',
				'purple',
				'blue',
				'brown',
				'green',
				'red',
				'black',
				'white',
				'orange',
				'magenta',
				'light_blue',
				'yellow',
				'lime',
				'pink',
				'gray',
				'light_gray'];
		
		const RemoveItems = []
		colors.forEach((color) => {
			RemoveItems.push(
				'refinedstorage:' + color + '_cable',
				'refinedstorage:' + color + '_grid',
				'refinedstorage:' + color + '_crafting_grid',
				'refinedstorage:' + color + '_crafting_monitor',
				'refinedstorage:' + color + '_crafter_manager',
				'refinedstorage:' + color + '_disk_manipulator',
				'refinedstorage:' + color + '_crafter',
				'refinedstorage:' + color + '_pattern_grid',
				'refinedstorage:' + color + '_fluid_grid',
				'refinedstorage:' + color + '_crafting_grid',
				'refinedstorage:' + color + '_network_receiver',
				'refinedstorage:' + color + '_network_transmitter',
				'refinedstorage:' + color + '_relay',
				'refinedstorage:' + color + '_wireless_transmitter',
				'refinedstorage:' + color + '_detector',
				'refinedstorage:' + color + '_security_manager',
				'refinedstorage:' + color + '_controller',
				'refinedstorage:' + color + '_creative_controller'
			)});
	
// Removing all items in the RemoteItems list.
 	RemoveItems.forEach((item) => {
		if (!Item.of(item).isEmpty()) {
		  event.hide(item);
		}})

	});

	// Re-Adding Basic Items
	onEvent('jei.add.items', event => {
		event.add(Item.of('mekanism:creative_chemical_tank'))
		event.add(Item.of('mekanism:creative_fluid_tank'))
		//event.add(Item.of('ae2:facade', 1, '{item:"minecraft:stone"}'))
	})

	// Removing Categories from jei
onEvent('jei.remove.categories', event => {
	// Removing Twilight Forest's Uncrafting Recipes Category.
		event.remove('twilightforest:uncrafting')
	// Create
		event.remove('create:automatic_shaped')
		event.remove('create:automatic_shapeless')
		event.remove('create:automatic_packing')
    // Alkashetry Tome
    	event.remove('reliquary:alkahestry_crafting')
    	event.remove('reliquary:alkahestry_charging')
	})