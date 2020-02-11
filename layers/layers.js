var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_distritos_huanuco_1 = new ol.format.GeoJSON();
var features_distritos_huanuco_1 = format_distritos_huanuco_1.readFeatures(json_distritos_huanuco_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_distritos_huanuco_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distritos_huanuco_1.addFeatures(features_distritos_huanuco_1);
var lyr_distritos_huanuco_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_distritos_huanuco_1, 
                style: style_distritos_huanuco_1,
                interactive: true,
                title: '<img src="styles/legend/distritos_huanuco_1.png" /> distritos_huanuco'
            });
var format_piscigranjas_2 = new ol.format.GeoJSON();
var features_piscigranjas_2 = format_piscigranjas_2.readFeatures(json_piscigranjas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_piscigranjas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_piscigranjas_2.addFeatures(features_piscigranjas_2);
var lyr_piscigranjas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_piscigranjas_2, 
                style: style_piscigranjas_2,
                interactive: true,
                title: '<img src="styles/legend/piscigranjas_2.png" /> piscigranjas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_distritos_huanuco_1.setVisible(true);lyr_piscigranjas_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_distritos_huanuco_1,lyr_piscigranjas_2];
lyr_distritos_huanuco_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOM_DIS': 'NOM_DIS', 'NOMB_PROV': 'NOMB_PROV', 'NOMB_DEP': 'NOMB_DEP', 'FECHA': 'FECHA', 'NUM_LEY': 'NUM_LEY', 'area': 'area', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_piscigranjas_2.set('fieldAliases', {'E': 'E', 'N': 'N', 'NOMBRE_DEL': 'NOMBRE_DEL', 'NOMBRE_DE': 'NOMBRE_DE', 'Caserio': 'Caserio', 'CENTRO_POB': 'CENTRO_POB', 'DISTRITO': 'DISTRITO', 'SUPERF__CR': 'SUPERF__CR', 'ESPECIE_CU': 'ESPECIE_CU', 'NIVEL_DE_P': 'NIVEL_DE_P', 'Ndeg_RESOL': 'Ndeg_RESOL', 'ANO': 'ANO', 'F13': 'F13', 'AMBITO': 'AMBITO', });
lyr_distritos_huanuco_1.set('fieldImages', {'OBJECTID': '', 'NOM_DIS': '', 'NOMB_PROV': '', 'NOMB_DEP': '', 'FECHA': '', 'NUM_LEY': '', 'area': '', 'ORIG_FID': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_piscigranjas_2.set('fieldImages', {'E': '', 'N': '', 'NOMBRE_DEL': '', 'NOMBRE_DE': '', 'Caserio': '', 'CENTRO_POB': '', 'DISTRITO': '', 'SUPERF__CR': '', 'ESPECIE_CU': '', 'NIVEL_DE_P': '', 'Ndeg_RESOL': '', 'ANO': '', 'F13': '', 'AMBITO': '', });
lyr_distritos_huanuco_1.set('fieldLabels', {'OBJECTID': 'no label', 'NOM_DIS': 'no label', 'NOMB_PROV': 'no label', 'NOMB_DEP': 'no label', 'FECHA': 'no label', 'NUM_LEY': 'no label', 'area': 'no label', 'ORIG_FID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_piscigranjas_2.set('fieldLabels', {'E': 'no label', 'N': 'no label', 'NOMBRE_DEL': 'no label', 'NOMBRE_DE': 'no label', 'Caserio': 'no label', 'CENTRO_POB': 'no label', 'DISTRITO': 'no label', 'SUPERF__CR': 'no label', 'ESPECIE_CU': 'no label', 'NIVEL_DE_P': 'no label', 'Ndeg_RESOL': 'no label', 'ANO': 'no label', 'F13': 'no label', 'AMBITO': 'no label', });
lyr_piscigranjas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});