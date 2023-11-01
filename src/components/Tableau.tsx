import {CSSProperties, useLayoutEffect, useRef, useState} from 'react';
import { Pile, PileProperties } from "./Pile";
import './Tableau.css';

export interface PileDisplayProperties extends PileProperties {
    row: number;
    col: number;
}

export interface TableauProperties {
    rows: number;
    cols: number;
    piles: PileDisplayProperties[];
}

export function Tableau({rows, cols, piles}: TableauProperties) {
    const ref = useRef<HTMLDivElement>(null);

    const [width, setWidth] = useState([0, 0]);

    function autoResize() {
        const widthTot = ref.current?.parentElement?.offsetWidth ?? 0;
        const widthLoc = Math.min(widthTot, 1024);
        const pad = (widthTot - widthLoc) / 2;
        setWidth([widthLoc, pad]);
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', autoResize)
        autoResize();
    }, []);

    const gutter = 0.1*width[0]/cols;
    const cellWidth = width[0]/cols - gutter;
    const cellHeight = 1.45*cellWidth - gutter;

    const tableauStyle: CSSProperties = {
        gridTemplateColumns: `repeat(${cols}, ${cellWidth}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellHeight}px)`,
        rowGap: `${gutter}px`,
        columnGap: `${gutter}px`
    };

    return (<div ref={ref} className="solitaire-tableau" style={tableauStyle}>
         {piles.map((pile, index) => {
            const pileStyle: CSSProperties = {
                gridRow: `${pile.row} / span 1`,
                gridColumn: `${pile.col} / span 1`,
                left: '0px'
            };
            return <div className="pile-container" style={pileStyle}> 
                <Pile 
                    pile={pile.pile}
                    direction={pile.direction}
                    key={index}
                 />
            </div>
        })}
    </div>)
}