/* eslint-disable @typescript-eslint/no-explicit-any */
import cn from 'classnames';
import { ContentState, EditorProps, EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { ErrorMessage } from '@/shared/UI/ErrorMessage';
import { InputProps } from '@/shared/UI/form-elements/Input';

import styles from './styles.module.scss';

type TypeInputPropsField = EditorProps & InputProps;

export interface ITextEditor extends Omit<TypeInputPropsField, 'editorState'> {
	value: string;
	onChange: (...event: any[]) => void;
}

export const TextEditor = ({ value, onChange, placeholder, error }: ITextEditor) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [isUpdated, setUpdated] = useState(false);

	const onEditorStateChange = (state: EditorState) => {
		setEditorState(state);
		setUpdated(true);

		return onChange(draftToHtml(convertToRaw(state.getCurrentContent())));
	};

	useEffect(() => {
		if (isUpdated) return;

		const blocksFromHtml = htmlToDraft(value || '');

		const contentState = ContentState.createFromBlockArray(
			blocksFromHtml.contentBlocks,
			blocksFromHtml.entityMap
		);

		setEditorState(EditorState.createWithContent(contentState));
	}, [value, isUpdated]);

	return (
		<div className={cn(styles.common, styles.editorWrapper, 'animate-fade')}>
			<label>
				<span>{placeholder}</span>
				<div className={styles.wrapper}>
					<Editor
						toolbarClassName={styles.toolbar}
						editorClassName={styles.editor}
						editorState={editorState}
						onEditorStateChange={onEditorStateChange}
						spellCheck
						toolbar={{
							options: ['inline', , 'list', 'history'],
							inline: {
								inDropdown: false,
								className: undefined,
								component: undefined,
								dropdownClassName: undefined,
								options: ['bold', 'italic', 'underline', 'strikethrough'],
							},
							list: {
								inDropdown: false,
								options: ['unordered', 'ordered'],
							},
						}}
					/>
				</div>
			</label>

			{error && <ErrorMessage className={styles.error} message={error.message as string} />}
		</div>
	);
};
