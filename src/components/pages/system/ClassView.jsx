// @flow

import type CharacterClass from '../../../model/CharacterClass';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

type Props = {
    characterClass: ?CharacterClass,
}

export default function ClassView({ characterClass }:Props) {
    const [ contents, setContents ] = useState('');

    useEffect(async ():Promise<void> => {
        if (!characterClass) return;
        const newContents = await characterClass.getContents();
        setContents(newContents);
    }, [characterClass?.name])

    if (!characterClass) return <div>no class</div>;

    return <div>
        <ReactMarkdown>{contents}</ReactMarkdown>
    </div>
}