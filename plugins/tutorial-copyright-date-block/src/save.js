import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { fallbackCurrentYear, showStartingYear, startingYear } = attributes;
    // const currentYear = new Date().getFullYear().toString();
    if (!fallbackCurrentYear) {
        return null;
    }

    let displayDate;

    if (showStartingYear && startingYear) {
        displayDate = startingYear + '-' + fallbackCurrentYear;
    } else {
        displayDate = fallbackCurrentYear;
    }

    return (
        <p {...useBlockProps.save()}>© {displayDate}</p>
    );
}