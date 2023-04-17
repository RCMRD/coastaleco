
-- View: vw_mangroves_area

-- DROP VIEW vw_mangroves_area;

CREATE OR REPLACE VIEW vw_mangroves_area AS
        (        (         SELECT 'Kenya'::text AS country,
                            sum(mangroves_kenya_cover.area_km2) AS area
                           FROM mangroves_kenya_cover
                UNION ALL
                         SELECT 'Tanzania'::text AS country,
                            sum(mangroves_tanzania_cover.area_km2) AS area
                           FROM mangroves_tanzania_cover)
        UNION ALL
                 SELECT 'Mozambique'::text AS country,
                    sum(mangroves_mozambique_cover.area_km2) AS area
                   FROM mangroves_mozambique_cover)
UNION ALL
         SELECT 'Madagascar'::text AS country,
            sum(mangroves_madagascar_cover.area_km2) AS area
           FROM mangroves_madagascar_cover;
