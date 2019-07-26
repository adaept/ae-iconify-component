import { Component, Prop, h, State, Method } from '@stencil/core';

@Component({
  tag: 'ae-iconify-component',
  styleUrl: 'ae-iconify-component.css',
  shadow: true
})
export class AeIconfiyComponent {
  /**
   * Title for the panel
   */
  @Prop() aetitle: string;

  /**
   * SVG content
   */
  @Prop() svgcontent: string;

  /**
   * State of the panel - visible or hidden
   */
  @State() collapsed: boolean;

  /**
   * Show/Hide the panel
   */
  @Method()
  async toggle() {
    this.collapsed = !this.collapsed;

    const svgxmlns = '<svg xmlns="http://www.w3.org/2000/svg" width="135.467" height="135.467" viewBox="0 0 135.467 135.467">'
    const mysvg = svgxmlns + '<path d="M118.439 17.935l17.028-13.817C124.63-7.513 99.863 7.028 68.903 25.936 37.94 44.838 34.843 82.65 44.13 104.464c1.327 3.107 2.728 6.117 4.282 8.954-6.618 4.877-18.504 12.82-27.5 14.314-13.159 2.184-13.935-39.264-9.289-80.713H2.335c-3.096 32.723-4.64 69.08 5.42 82.168 9.248 12.026 24.38 5.607 44.19-10.173 9.777 13.205 26.35 17.95 65.467-6.306l-4.133-5.816c-19.608 12.596-37.146 16.478-48.5-9.698-11.36-26.179-2.057-53.32 14.452-67.862 16.507-14.545 30.947-11.158 39.208-11.397" fill="currentColor" /></svg> ' +
      svgxmlns + '<path d="M17.067 117.454L.039 131.27c10.836 11.631 35.604-2.91 66.564-21.818 30.962-18.902 34.06-56.715 24.771-78.528-1.327-3.107-2.727-6.117-4.281-8.954 6.618-4.878 18.504-12.821 27.5-14.314 13.158-2.184 13.934 39.264 9.288 80.712h9.29c3.095-32.722 4.64-69.08-5.42-82.167-9.248-12.026-24.38-5.607-44.19 10.173-9.778-13.206-26.35-17.95-65.467 6.306l4.133 5.816c19.608-12.597 37.145-16.478 48.5 9.698 11.359 26.179 2.057 53.32-14.452 67.862-16.507 14.545-30.947 11.158-39.208 11.397" fill="currentColor"/></svg>';

    this.svgcontent = mysvg;

  }

  render() {
    return (
      <div>
        <div id="aeheader" onClick={this.toggle.bind(this)}>
          <span>{this.aetitle}</span>
        </div>
        <div id="aecontent" hidden={this.collapsed}>
          <slot name="aepanel-header" />
          <div innerHTML={this.svgcontent}></div>
          <slot name="aepanel-footer" />
        </div>
      </div >
    );
  }
}
