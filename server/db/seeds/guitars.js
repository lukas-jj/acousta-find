exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('guitars').del()
    .then(function () {
      // Inserts seed entries
      return knex('guitars').insert([
        { id: 1, name: 'GS-Mini', image:"https://www.rockshop.co.nz/shop/media/catalog/product/g/s/gs.jpg", brand_id: 1, type_id: 1, wood_top_id: 1, neck_width_id: 1 },
        { id: 2, name: '410', image:"https://www.reidys.com/images/taylor-410-p7444-10972_image.jpg", brand_id: 1, type_id: 4, wood_top_id: 1, neck_width_id: 2 },
        { id: 3, name: '414', image:"https://images.reverb.com/image/upload/s--s3iJNku9--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1455903733/xj9ab41or2niepj6yu37.jpg", brand_id: 1, type_id: 3, wood_top_id: 1, neck_width_id: 2 },
        { id: 4, name: 'Little Lady 2 - CCLL1-RDM', image:"https://coleclarkguitars.com/wp-content/uploads/2015/11/LL1-RDM-SIDE-NEW.jpg", brand_id: 3, type_id: 1, wood_top_id: 3, neck_width_id: 2 },
        { id: 5, name: 'Little Lady 2 - CCLL1E-RDM', image:"https://coleclarkguitars.com/wp-content/uploads/2016/01/LL1E-RDM-SIDE-NEW.jpg", brand_id: 3, type_id: 1, wood_top_id: 3, neck_width_id: 2 },
        { id: 6, name: 'Angel 2', image:"", brand_id: 3, type_id: 3, wood_top_id: 1, neck_width_id: 2 },
        { id: 7, name: 'D-28', image:"", brand_id: 2, type_id: 4, wood_top_id: 1, neck_width_id: 1 },
        { id: 8, name: 'F-55', image:"", brand_id: 4, type_id: 5, wood_top_id: 1, neck_width_id: 2 },
      ])
    })
}
