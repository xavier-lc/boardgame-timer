import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

/**
 * Set up the provided element for testing purposes
 *
 * @returns {ReactElement}
 */
export default function (Element, props) {
    const renderer = createRenderer();

    renderer.render(<Element {...props} />);

    return renderer.getRenderOutput();
}
