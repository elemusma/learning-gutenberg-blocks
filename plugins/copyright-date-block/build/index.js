(()=>{"use strict";const e=window.React,t=window.wp.blocks,r=window.wp.i18n,a=window.wp.blockEditor,n=window.wp.components,l=JSON.parse('{"N9":"create-block/copyright-date-block"}'),o=(0,e.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},(0,e.createElement)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"}));(0,t.registerBlockType)(l.N9,{icon:o,edit:function({attributes:t,setAttributes:l}){const{fallbackCurrentYear:o,showStartingYear:c,startingYear:i}=t,s=(new Date).getFullYear().toString();let h;return(0,e.useEffect)((()=>{s!==o&&l({fallbackCurrentYear:s})}),[s,o,l]),h=c&&i?i+"–"+s:s,(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)(n.PanelBody,{title:(0,r.__)("Settings","copyright-date-block")},(0,e.createElement)(n.ToggleControl,{checked:c,label:(0,r.__)("Show starting year","copyright-date-block"),onChange:()=>l({showStartingYear:!c})}),c&&(0,e.createElement)(n.TextControl,{label:(0,r.__)("Starting year","copyright-date-block"),value:i,onChange:e=>l({startingYear:e})}))),(0,e.createElement)("p",{...(0,a.useBlockProps)()},"© ",h))},save:function({attributes:t}){const{fallbackCurrentYear:r,showStartingYear:n,startingYear:l}=t;if(!r)return null;let o;return o=n&&l?l+"–"+r:r,(0,e.createElement)("p",{...a.useBlockProps.save()},"© ",o)}})})();