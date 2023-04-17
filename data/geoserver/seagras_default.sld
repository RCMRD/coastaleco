<?xml version="1.0" encoding="UTF-8"?>
<sld:UserStyle xmlns="http://www.opengis.net/sld" xmlns:sld="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml">
    <sld:Name>Default Styler</sld:Name>
    <sld:FeatureTypeStyle>
        <sld:Name>name</sld:Name>
        <sld:Rule>
            <sld:Title>Submerged Vegetation</sld:Title>
            <ogc:Filter>
                <ogc:PropertyIsEqualTo>
                    <ogc:PropertyName>descriptio</ogc:PropertyName>
                    <ogc:Literal>Submerged Vegetation</ogc:Literal>
                </ogc:PropertyIsEqualTo>
            </ogc:Filter>
            <sld:PolygonSymbolizer>
                <sld:Fill>
                    <sld:CssParameter name="fill">#ccff00</sld:CssParameter>

                </sld:Fill>
                <sld:Stroke>
                    <CssParameter name="stroke">#ccff00</CssParameter>
                    <CssParameter  name="stroke-opacity">1</CssParameter>
                    <CssParameter name="stroke-width">1</CssParameter>
                </sld:Stroke>
            </sld:PolygonSymbolizer>
        </sld:Rule>
        <sld:Rule>
            <sld:Title>Corals</sld:Title>
            <ogc:Filter>
                <ogc:PropertyIsEqualTo>
                    <ogc:PropertyName>descriptio</ogc:PropertyName>
                    <ogc:Literal>Corals</ogc:Literal>
                </ogc:PropertyIsEqualTo>
            </ogc:Filter>
            <sld:PolygonSymbolizer>
                <sld:Fill>
                    <sld:CssParameter name="fill">#559e65</sld:CssParameter>

                </sld:Fill>
                <sld:Stroke>
                    <CssParameter name="stroke">#559e65</CssParameter>
                    <CssParameter  name="stroke-opacity">1</CssParameter>
                    <CssParameter name="stroke-width">1</CssParameter>
                </sld:Stroke>
            </sld:PolygonSymbolizer>
        </sld:Rule>
        <sld:Rule>
            <sld:Title>Island</sld:Title>
            <ogc:Filter>
                <ogc:PropertyIsEqualTo>
                    <ogc:PropertyName>descriptio</ogc:PropertyName>
                    <ogc:Literal>Island</ogc:Literal>
                </ogc:PropertyIsEqualTo>
            </ogc:Filter>

            <sld:PolygonSymbolizer>
                <sld:Fill>
                    <sld:CssParameter name="fill">#b28e75</sld:CssParameter>

                </sld:Fill>
                <sld:Stroke>
                    <CssParameter name="stroke">#b28e75</CssParameter>
                    <CssParameter  name="stroke-opacity">1</CssParameter>
                    <CssParameter name="stroke-width">1</CssParameter>
                </sld:Stroke>
            </sld:PolygonSymbolizer>
        </sld:Rule>
        <sld:Rule>
            <sld:Title>Open Water</sld:Title>
            <ogc:Filter>
                <ogc:PropertyIsEqualTo>
                    <ogc:PropertyName>descriptio</ogc:PropertyName>
                    <ogc:Literal>Open Water</ogc:Literal>
                </ogc:PropertyIsEqualTo>
            </ogc:Filter>

            <sld:PolygonSymbolizer>
                <sld:Fill>
                    <sld:CssParameter name="fill">#338fff</sld:CssParameter>

                </sld:Fill>
                <sld:Stroke>
                    <CssParameter name="stroke">#338fff</CssParameter>
                    <CssParameter  name="stroke-opacity">1</CssParameter>
                    <CssParameter name="stroke-width">1</CssParameter>
                </sld:Stroke>
            </sld:PolygonSymbolizer>
        </sld:Rule>
        <sld:Rule>
            <sld:Title>Sand</sld:Title>
            <ogc:Filter>
                <ogc:PropertyIsEqualTo>
                    <ogc:PropertyName>descriptio</ogc:PropertyName>
                    <ogc:Literal>Sand</ogc:Literal>
                </ogc:PropertyIsEqualTo>
            </ogc:Filter>

            <sld:PolygonSymbolizer>
                <sld:Fill>
                    <sld:CssParameter name="fill">#efc997</sld:CssParameter>

                </sld:Fill>
                <sld:Stroke>
                    <CssParameter name="stroke">#efc997</CssParameter>
                    <CssParameter  name="stroke-opacity">1</CssParameter>
                    <CssParameter name="stroke-width">1</CssParameter>
                </sld:Stroke>
            </sld:PolygonSymbolizer>
        </sld:Rule>
        <sld:Rule>
            <sld:Title>Turbid Water</sld:Title>
            <ogc:Filter>
                <ogc:PropertyIsEqualTo>
                    <ogc:PropertyName>descriptio</ogc:PropertyName>
                    <ogc:Literal>Turbid Water</ogc:Literal>
                </ogc:PropertyIsEqualTo>
            </ogc:Filter>

            <sld:PolygonSymbolizer>
                <sld:Fill>
                    <sld:CssParameter name="fill">#c0c0c0</sld:CssParameter>

                </sld:Fill>
                <sld:Stroke>
                    <CssParameter name="stroke">#c0c0c0</CssParameter>
                    <CssParameter  name="stroke-opacity">1</CssParameter>
                    <CssParameter name="stroke-width">1</CssParameter>
                </sld:Stroke>
            </sld:PolygonSymbolizer>
        </sld:Rule>

    </sld:FeatureTypeStyle>
</sld:UserStyle>
