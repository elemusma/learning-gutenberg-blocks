/**
 * WordPress dependencies
 */


import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Edit = (props) => {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<InnerBlocks />
		</div>
	);
};
export default Edit;