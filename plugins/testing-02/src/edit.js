/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Button, PanelBody, __experimentalInputControl as InputControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { section_style, section_class, container_style, myArray } = attributes;

	const [value, setValue] = useState('');

	// const myArray = ['apple', 'banana', 'orange'];
	const addNewItem = () => {
		setAttributes({
			myArray: [...myArray, 'newItem']
		})
	}
	return (
		<>
			<InspectorControls>

				<PanelBody>
					{myArray.map((item) => <p>{item}</p>)}
					<Button isPrimary onClick={() => addNewItem()}>Add</Button>
				</PanelBody>
				<PanelBody title={__('Section Attributes')}>
					<InputControl
						label="Section Style"
						value={section_style}
						onChange={(nextValue) => setAttributes({ section_style: nextValue })}
					/>
					<InputControl
						label="Section Class"
						value={section_class}
						onChange={(nextValue) => setAttributes({ section_class: nextValue })}
					/>
				</PanelBody>
				<PanelBody title={__('Container Attributes')}>
					<InputControl
						label="Container Style"
						value={container_style}
						onChange={(nextValue) => setAttributes({ container_style: nextValue })}
					/>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()}>
				<p>
					{__('Testing 02 – hello from the editor!', 'testing-02')}
				</p>
			</section>
		</>
	);
}
