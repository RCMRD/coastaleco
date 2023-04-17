SELECT ST_SRID(kenya_mangrove_cover.geom) FROM kenya_mangrove_cover LIMIT 1;
SELECT ST_SRID(madagascar_mangrove_cover.geom) FROM madagascar_mangrove_cover LIMIT 1;
SELECT ST_SRID(mozambique_mangrove_cover.geom) FROM mozambique_mangrove_cover LIMIT 1;
SELECT ST_SRID(tanzania_mangrove_cover.geom) FROM tanzania_mangrove_cover LIMIT 1;

SELECT ST_SRID(kenya_seagrass.geom) FROM kenya_seagrass LIMIT 1;
SELECT ST_SRID(coastal_erosion_hotspots.geom) FROM coastal_erosion_hotspots LIMIT 1;

--Update to SRID 4326
SELECT UpdateGeometrySRID('kenya_mangrove_cover','geom',4326);
SELECT UpdateGeometrySRID('madagascar_mangrove_cover','geom',4326);
SELECT UpdateGeometrySRID('mozambique_mangrove_cover','geom',4326);
SELECT UpdateGeometrySRID('tanzania_mangrove_cover','geom',4326);

SELECT UpdateGeometrySRID('kenya_seagrass','geom',4326);

SELECT UpdateGeometrySRID('kenya_mangrove_cover','geom',900913);
SELECT UpdateGeometrySRID('madagascar_mangrove_cover','geom',900913);
SELECT UpdateGeometrySRID('mozambique_mangrove_cover','geom',900913);
SELECT UpdateGeometrySRID('tanzania_mangrove_cover','geom',900913);