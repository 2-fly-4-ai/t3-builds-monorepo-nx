/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import DecoupledDocumentEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import DocumentList from '@ckeditor/ckeditor5-list/src/documentlist.js';
import DocumentListProperties from '@ckeditor/ckeditor5-list/src/documentlistproperties.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import SelectAll from '@ckeditor/ckeditor5-select-all/src/selectall.js';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin.js';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';

class Editor extends DecoupledDocumentEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Alignment,
	AutoImage,
	Autoformat,
	AutoLink,
	BlockQuote,
	Bold,
	Code,
	CodeBlock,
	DocumentList,
	DocumentListProperties,
	Essentials,
	FindAndReplace,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HtmlEmbed,
	Image,
	ImageCaption,
	ImageInsert,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	MediaEmbed,
	MediaEmbedToolbar,
	PageBreak,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	SelectAll,
	SourceEditing,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableToolbar,
	TextTransformation,
	Underline,
	WordCount
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'|',
			'alignment',
			'|',
			'numberedList',
			'bulletedList',
			'|',
			'outdent',
			'indent',
			'|',
			'link',
			'blockQuote',
			'imageUpload',
			'imageInsert',
			'insertTable',
			'mediaEmbed',
			'code',
			'codeBlock',
			'sourceEditing',
			'htmlEmbed',
			'highlight',
			'findAndReplace',
			'|',
			'specialCharacters',
			'superscript',
			'subscript',
			'removeFormat',
			'pageBreak',
			'selectAll',
			'undo',
			'redo'
		]
	},
	language: 'en',
	image: {
		toolbar: [
			'imageTextAlternative',
			'toggleImageCaption',
			'linkImage'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	}
};

export default Editor;
