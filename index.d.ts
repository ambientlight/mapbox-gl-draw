declare module '@mapbox/mapbox-gl-draw' {
    import * as MapboxGL from 'mapbox-gl';
    namespace MapboxGLDraw {
        function setupDraw(options?: any): MapboxGL.Control;
    }

	export = MapboxGLDraw;
}