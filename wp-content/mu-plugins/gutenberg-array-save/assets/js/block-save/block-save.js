import _cloneDeep from 'lodash/cloneDeep';
export class SaveBlock {

  constructor() {
    wp.data.subscribe( this.saveCallback.bind(this) );
    this.lastIsSaving = false;
    this.lastDataSent = false;


    wp.hooks.addFilter( 'blocks.getSaveElement', 'gutes-array', this.getSaveCallback );
  }

  /**
   *
   * blocks.getSaveElement callback - store bid
   *
   * @param elem
   * @param blockType
   * @param attr
   * @returns {*}
   */
  getSaveCallback( elem, blockType, attr ) {

    if ( ! attr.bid ) {
      attr.bid =  Math.floor((1 + Math.random()) * 0x10000).toString(16);
    }

    return elem;
  }

  /**
   * Data Subscribe callback.
   * Clones blocks, runs through filter(s), and saves to custom DB table.
   *
   */
  saveCallback() {

    const editor = wp.data.select( 'core/editor' );
    const blocks = editor.getBlocks();
    let blocks_dup = _cloneDeep( blocks );
    const isSaving = editor.isSavingPost();
    const postId = editor.getCurrentPostId();

    if ( isSaving && ! this.lastIsSaving ) {
      blocks_dup = SaveBlock.cleanData( blocks_dup );

      // do not save - same data.
      if ( blocks_dup === this.lastDataSent ) {
        return;
      }

      this.lastDataSent = blocks_dup;

      // Save using gutes-db endpoint.
      wp.apiRequest( {
        path: '/gutes-db/v1/' + postId,
        data: {
          post_id: postId,
          gutes_data: blocks_dup.length ? JSON.stringify( blocks_dup ) : false
        },
        method: 'POST',
        dataType: 'json',
      } ).then(function(res){
        console.log( res );
      }, function(err) {
        console.log( err );
      });

    }

    this.lastIsSaving = isSaving;

  }

  /**
   *
   * Clean the data - allows for filters to be added so you can modify the data being saved.
   *
   * @param blocks
   * @returns {Array}
   */
  static cleanData( blocks ) {
    let newBlocks = [];
    for ( let block of blocks ) {
      let blockName = block.name.replace( '/', '-' );
      newBlocks.push({
        uid: block.uid || block.clientId,
        name: block.name,
        data: wp.hooks.applyFilters( `clean_data_${blockName}`, block.attributes, block.name, block.innerBlocks )
      })
    }
    return newBlocks;
  }

}
