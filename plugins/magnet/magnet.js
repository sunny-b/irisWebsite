/*
 *  Magnet - v.1.3.0
 *  A jQuery plugin to create filterable layouts.
 *  http://haundodesign.com/magnet
 *
 *  Developed by Haundo Design
 */

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {
	// undefined is used here as the undefined global variable in ECMAScript 3 is
	// mutable (ie. it can be changed by someone else). undefined isn't really being
	// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
	// can no longer be modified.

	// window and document are passed through as local variable rather than global
	// as this (slightly) quickens the resolution process and can be more efficiently
	// minified (especially when both are regularly referenced in your plugin).

	// Create the defaults once
	var pluginName = 'magnet',
		defaults = {
			animationType: 'scale',
			columns: {
				items: 8
			},
			containerSelector: '.magnet',
			containerStyle: { position: 'relative', overflow: 'hidden' },
			duration: 800,
			filter: '*',
			filterSelector: '.magnet-filter',
			gutter: null,
			hiddenClass: 'magnet-hidden',
			hiddenStyle: { opacity: 0 },
			itemSelector: '.magnet-item',
			itemStyle: { position: 'absolute' },
			layoutMode: 'masonry',
			rows: {
				items: 8
			},
			visibleStyle: { 'opacity': '1' }
		};

	// The actual plugin constructor
	function Plugin ( element, options ) {
		this.element = element;
		this.$element = $(element);
		// jQuery has an extend method which merges the contents of two or
		// more objects, storing the result in the first object. The first object
		// is generally empty as we don't want to alter the default options for
		// future instances of the plugin
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;

		if(this[options]){
			this[options](this.element);
		}else{
			this.isInit = true;
			this.init();
		}
	}	

	Plugin.prototype = {
		init: function () {
			// Place initialization logic here
			// You already have access to the DOM element and
			// the options via the instance, e.g. this.element
			// and this.settings
			// you can add more functions like the one below and
			// call them like so: this.yourOtherFunction(this.element, this.settings).
			var plugin = this;

			plugin.$container = plugin.$element.find(plugin.settings.containerSelector);
			plugin.$item = plugin.$element.find(plugin.settings.itemSelector);
			plugin.$filter = plugin.$element.find(plugin.settings.filterSelector);
			
			plugin.containerWidth;
			plugin.items = {
				x: [],
				y: []
			};

			plugin.onInit();
			plugin.onResize();
			plugin.onClick();
		},

		getContainerWidth: function () {
			var plugin = this,
					$container = plugin.$container;

			plugin.containerWidth = $container.width();
		},

		setGlobalStyle: function () {
			var plugin = this,
					$container = plugin.$container,
					$item = plugin.$item;

			$container.css(plugin.settings.containerStyle);
			$item.css(plugin.settings.itemStyle);
			$item.css({
				'margin-right': plugin.settings.gutter + 'px',
				'margin-bottom': plugin.settings.gutter + 'px'
			});
		},

		fetchItems: function () {
			var plugin = this,
					$item = plugin.$item,
					element = [],
					index = [],
					width = [],
					height = [],
					i = 0;

			$item.each(function(){
				var $this = $(this),
					e = $this[0],
					w = $this.outerWidth(true);
					h = $this.outerHeight(true);

				element.push(e);
				index.push(i);
				width.push(w);
				height.push(h);

				plugin.items.element = element;
				plugin.items.index = index;
				plugin.items.width = width;
				plugin.items.height = height;

				i++;
			});
		},

		filterItems: function () {
			var plugin = this,
					$item = plugin.$item,
					visibility = [],
					i = 0;

			$item.each(function(){
				var $this = $(this),
						v = true;

				if(plugin.settings.filter === '*' || $this.hasClass(plugin.settings.filter)){
				 	$this.removeClass(plugin.settings.hiddenClass);
				}else{
					v = false;
					$this.addClass(plugin.settings.hiddenClass);
				}

				visibility.push(v);

				i++;
			});
			plugin.items.visibility = visibility;
		},

		layoutItems: function () {
			var plugin = this,
					layout = plugin.settings.layoutMode,
					items = plugin.items,
					$container = plugin.$container,
					$item = plugin.$item,
					i = 0, // Items
					c = 1, // Columns
					r = 1, // Rows
					n, // Next item
					height = 0,
					min_height = 0, // Minimum height of an item
					max_height = 0,	// Maximum height of an item
					row_height = 0, // Height of the row where items are placed
					width = 0,
					max_width = 0; // Maximum width of an item

			switch(plugin.settings.layoutMode){
				case 'tiled':
					$item.each(function(){
						var $this = $(this);

						if(items.visibility[i]){
							items.x[i] = width;
							items.y[i] = height;

							for(j = 0; j < i && items.visibility[i]; j++){ // Position the first item of the row and set row height.				
								if(items.x[i] == 0 && items.x[j] == 0){
									if(items.visibility[j]){ // If compared item is visible
										height = items.y[j];
										items.y[i] = height;
									}
								}
							}

							for(j = 0; j < i; j++){
								if(items.visibility[j]){
									var condition_1 = (items.x[i] + items.width[i] > items.x[j]) && (items.x[i] + items.width[i] < items.x[j] + items.width[j]);
									var condition_2 = (items.x[j] + items.width[j] > items.x[i]) && (items.x[j] + items.width[j] < items.x[i] + items.width[i]);
									var condition_3 = (items.x[i] == items.x[j]);
									var condition_4 = (items.x[i] + items.width[i] == items.x[j] + items.width[j]);
									var condition_5 = (items.y[j] + items.height[j] > items.y[i]);
									var condition = (condition_1 || condition_2 || condition_3 || condition_4) && condition_5;

									if(condition){
										items.y[i] = items.height[j] + items.y[j]; // Update item position			
									}
								}
							}

							n = i + 1; //Next item
							while(items.visibility[n] == false){ //Get next visible item
								n++;
							}
							
							if(width + items.width[i] + items.width[n] <= plugin.containerWidth){
								width += items.width[i];
							}else{
								width = 0;
							}
						}

						i++;
					});

					break;
				case 'rows':
					$item.each(function(){
						var $this = $(this);			

						if(items.visibility[i]){
							items.x[i] = width;
							items.y[i] = height;

							if(items.height[i] > max_height){
								max_height = items.height[i];
							}

							n = i + 1; //Next item
							while(items.visibility[n] == false){ //Get next visible item
								n++;
							}

							if(width + items.width[i] + items.width[n] <= plugin.containerWidth && c < plugin.settings.rows.items){
								width += items.width[i];
							}else{
								height += max_height;
								c = 0;
								width = 0;
								max_height = 0;
							}

							c++;
						}

						i++;
					});

					break;
				case 'columns':
					$item.each(function(){
						var $this = $(this);			

						if(items.visibility[i]){
							items.x[i] = width;
							items.y[i] = height;

							if(items.width[i] > max_width){
								max_width = items.width[i];
							}

							n = i + 1; //Next item
							while(items.visibility[n] == false){ //Get next visible item
								n++;
							}

							if(r < plugin.settings.columns.items){
								height += items.height[i];
							}else{
								width += max_width;
								r = 0;
								height = 0;
								max_width = 0;
							}

							r++;
						}

						i++;
					});

					break;
				case 'vertical':
					$item.each(function(){
						var $this = $(this);

						if(items.visibility[i]){
							items.x[i] = width;
					 		items.y[i] = height;

							height += items.height[i];
						}	

						i++;
					});

					break;
				case 'horizontal':
					$item.each(function(){
						var $this = $(this);

						if(items.visibility[i]){
							items.x[i] = width;
					 		items.y[i] = height;

							width += items.width[i];
						}	

						i++;
					});

					break;
				case 'static':
					$item.each(function(){
						var $this = $(this);

						items.x[i] = width;
						items.y[i] = height;

						if(min_height == 0 || min_height > items.height[i]){
							min_height = items.height[i];
						}

						do{
							var flag = false;

							for(j = 0; j < i; j++){ // Check item by item if current item overlaps any previous item.
								var condition_1 = (items.x[i] + items.width[i] > items.x[j]) && (items.x[i] + items.width[i] < items.x[j] + items.width[j]);
								var condition_2 = (items.x[j] + items.width[j] > items.x[i]) && (items.x[j] + items.width[j] < items.x[i] + items.width[i]);
								var condition_3 = (items.x[i] == items.x[j]);
								var condition_4 = (items.x[i] + items.width[i] == items.x[j] + items.width[j]);
								var condition_5 = (items.y[j] + items.height[j] > items.y[i]);
								var condition = (condition_1 || condition_2 || condition_3 || condition_4) && condition_5;

								if(condition){
									flag = true; // Check new item position again with previous items.

									if(items.x[j] + items.width[j] + items.width[i] <= plugin.containerWidth){ // Check if item fits inside container
										width = items.x[j] + items.width[j];
									}else{
										width = 0;
										height += row_height;
										items.y[i] = height; // Update item position.
									}

									items.x[i] = width // Update item position.
								}
							}
	
						}while(flag);

						n = i + 1; //Next item
							
						if(width + items.width[i] + items.width[n] <= plugin.containerWidth){
							width += items.width[i];
						}else{
							row_height = min_height; // Set row height to min height of the item of the previous row
							width = 0;
							min_height = 0;
						}

						i++;
					});

					break;
				default:
					$item.each(function(){
						var $this = $(this);

						if(items.visibility[i]){
							items.x[i] = width;
							items.y[i] = height;

							if(min_height == 0 || min_height > items.height[i]){
								min_height = items.height[i];
							}

							do{
								var flag = false;

								for(j = 0; j < i; j++){ // Check item by item if current item overlaps any previous item.
									if(items.visibility[j]){ // Check with visible items.
										var condition_1 = (items.x[i] + items.width[i] > items.x[j]) && (items.x[i] + items.width[i] < items.x[j] + items.width[j]);
										var condition_2 = (items.x[j] + items.width[j] > items.x[i]) && (items.x[j] + items.width[j] < items.x[i] + items.width[i]);
										var condition_3 = (items.x[i] == items.x[j]);
										var condition_4 = (items.x[i] + items.width[i] == items.x[j] + items.width[j]);
										var condition_5 = (items.y[j] + items.height[j] > items.y[i]);
										var condition = (condition_1 || condition_2 || condition_3 || condition_4) && condition_5;

										if(condition){
											flag = true; // Check new item position again with previous items.

											if(items.x[j] + items.width[j] + items.width[i] <= plugin.containerWidth){ // Check if item fits inside container
												width = items.x[j] + items.width[j];
											}else{
												width = 0;
												height += row_height;
												items.y[i] = height; // Update item position.
											}
											items.x[i] = width // Update item position.
										}
									}
								}
							}while(flag);

							n = i + 1; //Next item
							while(items.visibility[n] == false){ //Get next visible item
								n++;
							}
							
							if(width + items.width[i] + items.width[n] <= plugin.containerWidth){
								width += items.width[i];
							}else{
								row_height = min_height; // Set row height to min height of the item of the previous row
								width = 0;
								min_height = 0;
							}
						}

						i++;
					});
			}
		},

		animateItems: function () {
			var plugin = this,
					$item = plugin.$item,
					animation,
					opacity,
					i = 0;

			$item.each(function(){
				var $this = $(this);

				if(plugin.items.visibility[i]){
					opacity = plugin.settings.visibleStyle.opacity;

					switch(plugin.settings.animationType){
						case 'fade':
							animation =  '';
							break;
						case 'flip':
							animation =  'rotateX(0deg)';
							break;
						case 'turn':
							animation =  'rotateY(0deg)';
							break;
						case 'rotate':
							animation =  'rotateZ(0deg)';
							break;
						default:
							animation =  'scale3d(1, 1, 1)';
					}
				}else{
					opacity = plugin.settings.hiddenStyle.opacity;

					switch(plugin.settings.animationType){
						case 'fade':
							animation =  '';
							break;
						case 'flip':
							animation =  'rotateX(180deg)';
							break;
						case 'turn':
							animation =  'rotateY(180deg)';
							break;
						case 'rotate':
							animation =  'rotateZ(180deg)';
							break;
						default:
							animation =  'scale3d(0, 0, 0)';
					}
				}

				if(plugin.isInit){
					$this.css({
			 			'transform': 'translate3d(' + plugin.items.x[i] + 'px,' + plugin.items.y[i] + 'px, 0px)' + animation,
						'opacity': opacity
					});
				}else{
					$this.css({
						'transform': 'translate3d(' + plugin.items.x[i] + 'px,' + plugin.items.y[i] + 'px, 0px)' + animation,
						'opacity': opacity,	
						'transition': plugin.settings.duration + 'ms'
					});
				}

				i++;
			});

			plugin.isInit = false;
		},

		resizeContainer: function () {
			var plugin = this,
					layout = plugin.settings.layoutMode,
					items = plugin.items,
					$container = plugin.$container,
					$item = plugin.$item,
					i = 0,
					width = 0,
					height = 0;
			
			if(layout == 'columns' || layout == 'horizontal'){
				for(i = 0; i < items.visibility.length; i++){
					if(items.visibility[i]){
						if(items.width[i] + items.x[i] > width){
							width = items.width[i] + items.x[i];
						}
					}
				}

				width += $container.outerWidth() - plugin.containerWidth; // Add container border + padding + margin

				$container.css('width', width);
			}

			for(i = 0; i < items.visibility.length; i++){
				if(items.visibility[i]){
					if(items.height[i] + items.y[i] > height){
						height = items.height[i] + items.y[i];
					}
				}
			}

			height += $container.outerHeight() - $container.height();

			$container.css({
				'height': height,
				'transition': plugin.settings.duration + 'ms'
			});
		},

		onInit: function () {
			var plugin = this;

			plugin.getContainerWidth();
			plugin.setGlobalStyle();
			plugin.fetchItems();
			plugin.filterItems();
			plugin.layoutItems();
			plugin.animateItems();
			plugin.resizeContainer();
		},
		
		onClick: function () {
			var plugin = this,
					$filter = plugin.$filter;

			$filter.on('click', '[data-filter]', function () {
				var $this = $(this);

				if($this.parent().is($filter)) { // Check if clicked element is direct child of filterSelector
					$this.addClass('active').siblings().removeClass('active'); // Add active to clicked element, remove it from non-clicked elements
				}else{
					$this.parent().addClass('active').siblings().removeClass('active'); // Add active to parent of the clicked element, remove it from parent of non-clicked elements
				}

				plugin.settings.filter = $this.attr('data-filter'); // Get filter of clicked element

				plugin.getContainerWidth();
				plugin.filterItems();
				plugin.layoutItems();
				plugin.animateItems();
				plugin.resizeContainer();
			});
		},

		onResize: function () {
			var plugin = this;

			$(window).resize(function(){
				plugin.getContainerWidth();
				plugin.fetchItems();
				plugin.layoutItems();
				plugin.animateItems();
				plugin.resizeContainer();
			});
		}
	};

	Plugin.prototype.append = function (elem) {
		var plugin = this;

		plugin.$container.append(elem);
		plugin.refresh();
	}

	Plugin.prototype.destroy = function () {
		var plugin = this,
				$item = plugin.$item,
				$container = plugin.$container;
				$filter = plugin.$filter;
		
		$item.each(function(){
			var $this = $(this);

			$this.removeClass(plugin.settings.hiddenClass);
			$this.removeAttr('style');
		});
		$container.removeAttr('style');
		$filter.off('click', '[data-filter]');
		$(window).off('resize');
	}

	Plugin.prototype.get = function (elem) {
		var plugin = this,
				$elem = plugin.$container.find(elem);

		for(var key in plugin.items.element){
			var elem = plugin.items.element[key];

			if($elem.is(elem)){
				console.log(elem);
			}
		}
	}

	Plugin.prototype.getAll = function () {
		var plugin = this;

		for(var key in plugin.items.element){
			console.log(plugin.items.element[key]);
		}
	}

	Plugin.prototype.getAllData = function () {
		var plugin = this;

		console.log(plugin.items);
	}

	Plugin.prototype.hide = function (elem) {
		var plugin = this,
				$elem = plugin.$container.find(elem),
				i = 0;

		plugin.$item.each(function(){
			var $this = $(this);

			if($elem.is($this)){
				$elem.addClass(plugin.settings.hiddenClass);
				plugin.items.visibility[i] = false;
			}

			i++;
		});

		plugin.layoutItems();
		plugin.animateItems();
		plugin.resizeContainer();
	}

	Plugin.prototype.prepend = function (elem) {
		var plugin = this;

		plugin.$container.prepend(elem);
		plugin.refresh();
	}

	Plugin.prototype.refresh = function () {
		var plugin = this;

		plugin.init();
	}

	Plugin.prototype.remove = function (elem) {
		var plugin = this;

		plugin.$container.find(elem).remove();
		plugin.refresh();
	}

	Plugin.prototype.show = function (elem) {
		var plugin = this,
				$elem = plugin.$container.find(elem),
				i = 0;

		plugin.$item.each(function(){
			var $this = $(this);

			if($elem.is($this)){
				$elem.removeClass(plugin.settings.hiddenClass);
				plugin.items.visibility[i] = true;
			}

			i++;
		});

		plugin.layoutItems();
		plugin.animateItems();
		plugin.resizeContainer();
	}

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[pluginName] = function ( options ) {
		var args = arguments;

   	// Is the first parameter an object (options), or was omitted,
    // instantiate a new instance of the plugin.
    if (options === undefined || typeof options === 'object') {
      return this.each(function () {
        if (!$.data(this, 'plugin_' + pluginName)) {
        	$.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
        }
      });
    } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
      // Cache the method call to make it possible to return a value
      var returns;

      this.each(function () {
        var instance = $.data(this, 'plugin_' + pluginName);

        if (instance instanceof Plugin && typeof instance[options] === 'function') {
          returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
        }

        if (options === 'destroy') {
          $.data(this, 'plugin_' + pluginName, null);
        }
    	});

    	// If the earlier cached method gives a value back return the value,
    	// otherwise return this to preserve chainability.
      return returns !== undefined ? returns : this;
    }
  };

})( jQuery, window, document );