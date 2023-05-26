import React from 'react';
import { Label } from '@radix-ui/react-label';
import { toast, Toaster } from 'react-hot-toast';

function test2() {
  return (
    <div className=" flex justify-center py-16">
      <div class="prose-p:font-sans prose-li:list-style dark:prose-pre:bg-black prose-pre:bg-black dark:prose-pre:border-2 prose-pre:border-2 prose-pre:border-t-[30px] dark:prose-pre:border-t-[30px] prose  prose-lg prose-a:font-bold prose-li:text-black prose-table:border-2 prose-table:shadow-lg prose-th:border prose-th:bg-gray-300 dark:prose-th:bg-opacity-0 prose-th:p-3 prose-td:border prose-td:p-3 prose-img:mx-auto prose-img:my-12 prose-img:max-h-custom prose-img:w-auto prose-img:border-2 dark:prose-headings:text-gray-300 prose-img:border-black prose-img:py-12 dark:prose-img:bg-black prose-img:shadow-[5px_5px_0px_0px_rgba(109,40,217)] dark:prose-p:text-gray-400 prose-li:font-sans dark:prose-li:text-gray-400 prose-img:shadow-black dark:prose-strong:text-red-400 dark:prose-code:text-white prose-table:text-gray-400 max-w-none pb-8 marker:text-black dark:text-gray-400 dark:text-opacity-80 dark:marker:text-gray-400">
        <table>
          <thead>
            <tr>
              <th>Tailwind Class</th>
              <th>Description</th>
              <th>CSS Equivalent</th>
            </tr>
          </thead>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Flex Basis</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>basis-[$spacing]</td>
              <td>Sets the flex-basis to an arbitrary value.</td>
              <td>
                <code>flex-basis: $spacing;</code>
              </td>
            </tr>
            <tr>
              <td>basis-auto</td>
              <td>Sets the flex-basis to auto.</td>
              <td>
                <code>flex-basis: auto;</code>
              </td>
            </tr>
            <tr>
              <td>basis-full</td>
              <td>Sets the flex-basis to 100%.</td>
              <td>
                <code>flex-basis: 100%;</code>
              </td>
            </tr>
            <tr>
              <td>basis-1/2</td>
              <td>Sets the flex-basis to 50%.</td>
              <td>
                <code>flex-basis: 50%;</code>
              </td>
            </tr>
            <tr>
              <td>basis-[1-2]/3</td>
              <td>Sets the flex-basis to a third or two thirds.</td>
              <td>
                <code>flex-basis: 33.3333%;</code> or{' '}
                <code>flex-basis: 66.6666%;</code>
              </td>
            </tr>
            <tr>
              <td>basis-[1-3]/4</td>
              <td>
                Sets the flex-basis to a quarter, half, or three quarters.
              </td>
              <td>
                <code>flex-basis: 25%;</code> <code>flex-basis: 50%;</code>{' '}
                <code>flex-basis: 75%;</code>
              </td>
            </tr>
            <tr>
              <td>basis-[1-4]/5</td>
              <td>Sets the flex-basis to 20%, 40%, 60%, or 80%.</td>
              <td>
                <code>flex-basis: 20%;</code> <code>flex-basis: 40%;</code>{' '}
                <code>flex-basis: 60%;</code> <code>flex-basis: 80%;</code>
              </td>
            </tr>
            <tr>
              <td>basis-[1-5]/6</td>
              <td>Sets the flex-basis to one sixth to five sixths.</td>
              <td>
                <code>flex-basis: 16.6666%;</code> to{' '}
                <code>flex-basis: 83.3333%;</code>
              </td>
            </tr>
            <tr>
              <td>basis-[1-11]/12</td>
              <td>Sets the flex-basis to a twelfth to eleven twelfths.</td>
              <td>
                <code>flex-basis: 8.3333%;</code> to{' '}
                <code>flex-basis: 91.6666%;</code>
              </td>
            </tr>
          </tbody>
        </table>
        Direction
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Direction</strong>
              </td>
            </tr>
            <tr>
              <td>flex-row</td>
              <td>
                Sets the direction of flex items in a flex container with a row
                direction.
              </td>
              <td>
                <code>flex-direction: row;</code>
              </td>
            </tr>
            <tr>
              <td>flex-col</td>
              <td>
                Sets the direction of flex items in a flex container with a
                column direction.
              </td>
              <td>
                <code>flex-direction: column;</code>
              </td>
            </tr>
            <tr>
              <td>flex-row-reverse</td>
              <td>Same as flex-row but reversed.</td>
              <td>
                <code>flex-direction: row-reverse;</code>
              </td>
            </tr>
            <tr>
              <td>flex-col-reverse</td>
              <td>Same as flex-col but reversed.</td>
              <td>
                <code>flex-direction: column-reverse;</code>
              </td>
            </tr>
          </tbody>
        </table>
        Wrap
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Wrap</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>flex-wrap</td>
              <td>Items will wrap onto multiple lines, from top to bottom.</td>
              <td>
                <code>flex-wrap: wrap;</code>
              </td>
            </tr>
            <tr>
              <td>flex-wrap-reverse</td>
              <td>Items will wrap onto multiple lines from bottom to top.</td>
              <td>
                <code>flex-wrap: wrap-reverse;</code>
              </td>
            </tr>
            <tr>
              <td>flex-nowrap</td>
              <td>All flex items will be on one line.</td>
              <td>
                <code>flex-wrap: nowrap;</code>
              </td>
            </tr>
          </tbody>
        </table>
        Flex
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Flex</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>flex-initial</td>
              <td>
                Item will shrink and grow at the same rate as other flex items
                in the container.
              </td>
              <td>
                <code>flex: initial;</code>
              </td>
            </tr>
            <tr>
              <td>flex-1</td>
              <td>
                Item will grow and shrink to take up any remaining space in the
                container.
              </td>
              <td>
                <code>flex: 1;</code>
              </td>
            </tr>
            <tr>
              <td>flex-auto</td>
              <td>
                Item will grow and shrink based on its width and height
                properties.
              </td>
              <td>
                <code>flex: auto;</code>
              </td>
            </tr>
            <tr>
              <td>flex-none</td>
              <td>Item will not shrink or grow.</td>
              <td>
                <code>flex: none;</code>
              </td>
            </tr>
          </tbody>
        </table>
        Flex Grow
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Flex Grow</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>grow</td>
              <td>Item will grow to fill remaining space, if necessary.</td>
              <td>
                <code>flex-grow: 1;</code>
              </td>
            </tr>
            <tr>
              <td>grow-0</td>
              <td>Item will not grow.</td>
              <td>
                <code>flex-grow: 0;</code>
              </td>
            </tr>
          </tbody>
        </table>
        Flex Shrink
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Flex Shrink</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>shrink</td>
              <td>Item can shrink if necessary.</td>
              <td>
                <code>flex-shrink: 1;</code>
              </td>
            </tr>
            <tr>
              <td>shrink-0</td>
              <td>Item will not shrink.</td>
              <td>
                <code>flex-shrink: 0;</code>
              </td>
            </tr>
          </tbody>
        </table>
        Flex Order
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Flex Order</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>order-first</td>
              <td>Item will be displayed first.</td>
              <td>
                <code>order: -9999;</code>
              </td>
            </tr>
            <tr>
              <td>order-last</td>
              <td>Item will be displayed last.</td>
              <td>
                <code>order: 9999;</code>
              </td>
            </tr>
            <tr>
              <td>order-none</td>
              <td>Item will appear in its source order.</td>
              <td>
                <code>order: 0;</code>
              </td>
            </tr>
            <tr>
              <td>order-[1-12]</td>
              <td>
                Item will appear in the order defined by the number (1-12).
              </td>
              <td>
                <code>order: 1;</code> to <code>order: 12;</code>
              </td>
            </tr>
          </tbody>
        </table>
        grid-template-rows
        <table>
          <thead>
            <tr>
              <th>Tailwind Class</th>
              <th>Description</th>
              <th>CSS Equivalent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>grid-template-rows</strong>
              </td>
            </tr>
            <tr>
              <td>grid-rows-[1-6]</td>
              <td>Sets the number of grid rows to span</td>
              <td>grid-row: span value;</td>
            </tr>
            <tr>
              <td>grid-rows-none</td>
              <td>Disables grid row sizing</td>
              <td>grid-row: auto;</td>
            </tr>
          </tbody>
        </table>
        grid-template-columns
        <table>
          <tbody>
            <tr>
              <td>
                <strong>grid-template-columns</strong>
              </td>
            </tr>
            <tr>
              <td>grid-cols-[1-12]</td>
              <td>Sets the number of grid columns to span</td>
              <td>grid-column: span value;</td>
            </tr>
            <tr>
              <td>grid-cols-none</td>
              <td>Disables grid column sizing</td>
              <td>grid-column: auto;</td>
            </tr>
          </tbody>
        </table>
        grid-column-[start|end]
        <table>
          <tbody>
            <tr>
              <td>
                <strong>grid-column-[start|end]</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>col-auto</td>
              <td>Automatically sizes the column width</td>
              <td>width: auto;</td>
            </tr>
            <tr>
              <td>col-span-[1-12]</td>
              <td>Sets the number of columns to span</td>
              <td>grid-column: span value;</td>
            </tr>
            <tr>
              <td>col-span-full</td>
              <td>Spans all columns in a grid</td>
              <td>grid-column: 1 / -1;</td>
            </tr>
            <tr>
              <td>col-start-[1-13]</td>
              <td>Defines the starting position of a grid column</td>
              <td>grid-column-start: value;</td>
            </tr>
            <tr>
              <td>col-start-auto</td>
              <td>Automatically determines the start position</td>
              <td>grid-column-start: auto;</td>
            </tr>
            <tr>
              <td>col-end-[1-13]</td>
              <td>Defines the ending position of a grid column</td>
              <td>grid-column-end: value;</td>
            </tr>
            <tr>
              <td>col-end-auto</td>
              <td>Automatically determines the end position</td>
              <td>grid-column-end: auto;</td>
            </tr>
          </tbody>
        </table>
        grid-row-[start|end]
        <table>
          <tbody>
            <tr>
              <td>
                <strong>grid-row-[start|end]</strong>
              </td>
            </tr>
            <tr>
              <td>row-auto</td>
              <td>Automatically sizes the row height</td>
              <td>height: auto;</td>
            </tr>
            <tr>
              <td>row-span-[1-6]</td>
              <td>Sets the number of rows to span</td>
              <td>grid-row: span value;</td>
            </tr>
            <tr>
              <td>row-span-full</td>
              <td>Spans all rows in a grid</td>
              <td>grid-row: 1 / -1;</td>
            </tr>
            <tr>
              <td>row-start-[1-7]</td>
              <td>Defines the starting position of a grid row</td>
              <td>grid-row-start: value;</td>
            </tr>
            <tr>
              <td>row-start-auto</td>
              <td>Automatically determines the start position</td>
              <td>grid-row-start: auto;</td>
            </tr>
            <tr>
              <td>row-end-[1-7]</td>
              <td>Defines the ending position of a grid row</td>
              <td>grid-row-end: value;</td>
            </tr>
            <tr>
              <td>row-end-auto</td>
              <td>Automatically determines the end position</td>
              <td>grid-row-end: auto;</td>
            </tr>
          </tbody>
        </table>
        grid-auto-flow
        <table>
          <tbody>
            <tr>
              <td>
                <strong>grid-auto-flow</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>grid-flow-row</td>
              <td>Automatically places items in rows</td>
              <td>grid-auto-flow: row;</td>
            </tr>
            <tr>
              <td>grid-flow-col</td>
              <td>Automatically places items in columns</td>
              <td>grid-auto-flow: column;</td>
            </tr>
            <tr>
              <td>grid-flow-dense</td>
              <td>Enables dense packing of grid items</td>
              <td>grid-auto-flow: dense;</td>
            </tr>
            <tr>
              <td>grid-flow-row-dense</td>
              <td>Enables dense packing of grid items in rows</td>
              <td>grid-auto-flow: row dense;</td>
            </tr>
            <tr>
              <td>grid-flow-col-dense</td>
              <td>Enables dense packing of grid items in columns</td>
              <td>grid-auto-flow: column dense;</td>
            </tr>
          </tbody>
        </table>
        grid-auto-columns
        <table>
          <tbody>
            <tr>
              <td>
                <strong>grid-auto-columns</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>auto-cols-auto</td>
              <td>Automatically sizes the column width</td>
              <td>width: auto;</td>
            </tr>
            <tr>
              <td>auto-cols-min</td>
              <td>Sets the minimum size of automatically placed columns</td>
              <td>grid-auto-columns: min-content;</td>
            </tr>
            <tr>
              <td>auto-cols-max</td>
              <td>Sets the maximum size of automatically placed columns</td>
              <td>grid-auto-columns: max-content;</td>
            </tr>
            <tr>
              <td>auto-cols-fr</td>
              <td>Sets the fraction size of automatically placed columns</td>
              <td>grid-auto-columns: minmax(0, 1fr);</td>
            </tr>
          </tbody>
        </table>
        grid-auto-rows
        <table>
          <tbody>
            <tr>
              <td>
                <strong>grid-auto-rows</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>auto-rows-auto</td>
              <td>Automatically sizes the row height</td>
              <td>height: auto;</td>
            </tr>
            <tr>
              <td>auto-rows-min</td>
              <td>Sets the minimum size of automatically placed rows</td>
              <td>grid-auto-rows: min-content;</td>
            </tr>
            <tr>
              <td>auto-rows-max</td>
              <td>Sets the maximum size of automatically placed rows</td>
              <td>grid-auto-rows: max-content;</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Margin</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>m-auto</td>
              <td>Centers the element horizontally</td>
              <td>margin-left: auto; margin-right: auto;</td>
            </tr>
            <tr>
              <td>-m-[$spacing]</td>
              <td>Negative margin on all sides</td>
              <td>margin: -$spacing;</td>
            </tr>
            <tr>
              <td>-m[x|y]-[$spacing]</td>
              <td>Negative vertical or horizontal margin</td>
              <td>
                margin-top, margin-bottom, margin-left, margin-right: -$spacing;
              </td>
            </tr>
            <tr>
              <td>-m[t|r|b|l]-[$spacing]</td>
              <td>Negative margin on specific sides</td>
              <td>
                margin-top, margin-right, margin-bottom, margin-left: -$spacing;
              </td>
            </tr>
            <tr>
              <td>m-[$spacing]</td>
              <td>Margin on all sides</td>
              <td>margin: $spacing;</td>
            </tr>
            <tr>
              <td>m[x|y]-[$spacing]</td>
              <td>Vertical or horizontal margin</td>
              <td>
                margin-top, margin-bottom, margin-left, margin-right: $spacing;
              </td>
            </tr>
            <tr>
              <td>m[t|r|b|l]-[$spacing]</td>
              <td>Margin on specific sides</td>
              <td>
                margin-top, margin-right, margin-bottom, margin-left: $spacing;
              </td>
            </tr>
          </tbody>
        </table>
        Space Between
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Space Between</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>-space-[x|y]-[$spacing]</td>
              <td>
                Adds negative space between elements horizontally or vertically
              </td>
              <td>
                margin-left, margin-top: -$spacing; (x-axis) or margin-top,
                margin-bottom: -$spacing; (y-axis)
              </td>
            </tr>
            <tr>
              <td>space-[x|y]-[$spacing]</td>
              <td>Adds space between elements horizontally or vertically</td>
              <td>
                margin-left, margin-top: $spacing; (x-axis) or margin-top,
                margin-bottom: $spacing; (y-axis)
              </td>
            </tr>
            <tr>
              <td>space-[x|y]-reverse</td>
              <td>
                Reverses the order of elements and adds space between them
                horizontally or vertically
              </td>
              <td>
                flex-direction: row-reverse; margin-left, margin-top: $spacing;
                (x-axis) or margin-top, margin-bottom: $spacing; (y-axis)
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Gap</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>gap-[$spacing]</td>
              <td>Adds gap between grid or flexbox items</td>
              <td>gap: $spacing;</td>
            </tr>
            <tr>
              <td>gap-x-[$spacing]</td>
              <td>Adds horizontal gap between grid or flexbox items</td>
              <td>column-gap: $spacing;</td>
            </tr>
            <tr>
              <td>gap-y-[$spacing]</td>
              <td>Adds vertical gap between grid or flexbox items</td>
              <td>row-gap: $spacing;</td>
            </tr>
          </tbody>
        </table>
        Align Content
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Align Content</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>content-center</td>
              <td>Aligns content in the center of a flex container</td>
              <td>align-content: center;</td>
            </tr>
            <tr>
              <td>content-start</td>
              <td>Aligns content at the start of a flex container</td>
              <td>align-content: flex-start;</td>
            </tr>
            <tr>
              <td>content-end</td>
              <td>Aligns content at the end of a flex container</td>
              <td>align-content: flex-end;</td>
            </tr>
            <tr>
              <td>content-between</td>
              <td>Aligns content with space between in a flex container</td>
              <td>align-content: space-between;</td>
            </tr>
            <tr>
              <td>content-around</td>
              <td>Aligns content with space around in a flex container</td>
              <td>align-content: space-around;</td>
            </tr>
            <tr>
              <td>content-evenly</td>
              <td>
                Aligns content with equal space around in a flex container
              </td>
              <td>align-content: space-evenly;</td>
            </tr>
            <tr>
              <td>content-baseline</td>
              <td>Aligns content along the baseline of a flex container</td>
              <td>align-content: baseline;</td>
            </tr>
          </tbody>
        </table>
        Justify Content
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Justify Content</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>justify-start</td>
              <td>Aligns content at the start of a flex container</td>
              <td>justify-content: flex-start;</td>
            </tr>
            <tr>
              <td>justify-center</td>
              <td>Aligns content in the center of a flex container</td>
              <td>justify-content: center;</td>
            </tr>
            <tr>
              <td>justify-end</td>
              <td>Aligns content at the end of a flex container</td>
              <td>justify-content: flex-end;</td>
            </tr>
            <tr>
              <td>justify-between</td>
              <td>Aligns content with space between in a flex container</td>
              <td>justify-content: space-between;</td>
            </tr>
            <tr>
              <td>justify-around</td>
              <td>Aligns content with space around in a flex container</td>
              <td>justify-content: space-around;</td>
            </tr>
            <tr>
              <td>justify-evenly</td>
              <td>
                Aligns content with equal space around in a flex container
              </td>
              <td>justify-content: space-evenly;</td>
            </tr>
          </tbody>
        </table>
        Align Items
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Align Items</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>items-start</td>
              <td>Aligns items at the start of a flex container</td>
              <td>align-items: flex-start;</td>
            </tr>
            <tr>
              <td>items-end</td>
              <td>Aligns items at the end of a flex container</td>
              <td>align-items: flex-end;</td>
            </tr>
            <tr>
              <td>items-center</td>
              <td>Aligns items in the center of a flex container</td>
              <td>align-items: center;</td>
            </tr>
            <tr>
              <td>items-baseline</td>
              <td>Aligns items along the baseline of a flex container</td>
              <td>align-items: baseline;</td>
            </tr>
            <tr>
              <td>items-stretch</td>
              <td>Stretches items to fill the height of a flex container</td>
              <td>align-items: stretch;</td>
            </tr>
          </tbody>
        </table>
        Place Content
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Place Content</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>place-content-center</td>
              <td>
                Aligns and places content in the center of a grid container
              </td>
              <td>place-content: center;</td>
            </tr>
            <tr>
              <td>place-content-start</td>
              <td>
                Aligns and places content at the start of a grid container
              </td>
              <td>place-content: start;</td>
            </tr>
            <tr>
              <td>place-content-end</td>
              <td>Aligns and places content at the end of a grid container</td>
              <td>place-content: end;</td>
            </tr>
            <tr>
              <td>place-content-between</td>
              <td>
                Aligns and places content with space between in a grid container
              </td>
              <td>place-content: space-between;</td>
            </tr>
            <tr>
              <td>place-content-around</td>
              <td>
                Aligns and places content with space around in a grid container
              </td>
              <td>place-content: space-around;</td>
            </tr>
            <tr>
              <td>place-content-evenly</td>
              <td>
                Aligns and places content with equal space around in a grid
                container
              </td>
              <td>place-content: space-evenly;</td>
            </tr>
            <tr>
              <td>place-content-stretch</td>
              <td>Stretches content to fill the grid container</td>
              <td>place-content: stretch;</td>
            </tr>
            <tr>
              <td>place-content-baseline</td>
              <td>
                Aligns and places content along the baseline of a grid container
              </td>
              <td>place-content: baseline;</td>
            </tr>
          </tbody>
        </table>
        Place Items
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Place Items</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>place-items-auto</td>
              <td>Aligns and places items automatically in a grid container</td>
              <td>place-items: auto;</td>
            </tr>
            <tr>
              <td>place-items-start</td>
              <td>Aligns and places items at the start of a grid container</td>
              <td>place-items: start;</td>
            </tr>
            <tr>
              <td>place-items-end</td>
              <td>Aligns and places items at the end of a grid container</td>
              <td>place-items: end;</td>
            </tr>
            <tr>
              <td>place-items-center</td>
              <td>Aligns and places items in the center of a grid container</td>
              <td>place-items: center;</td>
            </tr>
            <tr>
              <td>place-items-stretch</td>
              <td>
                Stretches items to fill the grid cells of a grid container
              </td>
              <td>place-items: stretch;</td>
            </tr>
          </tbody>
        </table>
        Justify Items
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Justify Items</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>justify-items-start</td>
              <td>Aligns items at the start of each grid cell</td>
              <td>justify-items: start;</td>
            </tr>
            <tr>
              <td>justify-items-end</td>
              <td>Aligns items at the end of each grid cell</td>
              <td>justify-items: end;</td>
            </tr>
            <tr>
              <td>justify-items-center</td>
              <td>Aligns items in the center of each grid cell</td>
              <td>justify-items: center;</td>
            </tr>
            <tr>
              <td>justify-items-stretch</td>
              <td>Stretches items to fill the width of each grid cell</td>
              <td>justify-items: stretch;</td>
            </tr>
          </tbody>
        </table>
        Justify Self
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Justify Self</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>justify-self-auto</td>
              <td>
                Aligns an individual item according to the grid container's
                justify-items value
              </td>
              <td>justify-self: auto;</td>
            </tr>
            <tr>
              <td>justify-self-start</td>
              <td>Aligns an individual item at the start of its grid cell</td>
              <td>justify-self: start;</td>
            </tr>
            <tr>
              <td>justify-self-end</td>
              <td>Aligns an individual item at the end of its grid cell</td>
              <td>justify-self: end;</td>
            </tr>
            <tr>
              <td>justify-self-center</td>
              <td>Aligns an individual item in the center of its grid cell</td>
              <td>justify-self: center;</td>
            </tr>
            <tr>
              <td>justify-self-stretch</td>
              <td>
                Stretches an individual item to fill the width of its grid cell
              </td>
              <td>justify-self: stretch;</td>
            </tr>
          </tbody>
        </table>
        Align Self
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Align Self</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>self-auto</td>
              <td>
                Aligns an individual item according to the grid container's
                align-items value
              </td>
              <td>align-self: auto;</td>
            </tr>
            <tr>
              <td>self-start</td>
              <td>Aligns an individual item at the start of its grid cell</td>
              <td>align-self: start;</td>
            </tr>
            <tr>
              <td>self-end</td>
              <td>Aligns an individual item at the end of its grid cell</td>
              <td>align-self: end;</td>
            </tr>
            <tr>
              <td>self-center</td>
              <td>Aligns an individual item in the center of its grid cell</td>
              <td>align-self: center;</td>
            </tr>
            <tr>
              <td>self-stretch</td>
              <td>
                Stretches an individual item to fill the height of its grid cell
              </td>
              <td>align-self: stretch;</td>
            </tr>
            <tr>
              <td>self-baseline</td>
              <td>
                Aligns an individual item along the baseline of its grid cell
              </td>
              <td>align-self: baseline;</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Border Color</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>border-color-transparent</td>
              <td>Sets the border color to transparent</td>
              <td>border-color: transparent;</td>
            </tr>
            <tr>
              <td>border-color-inherit</td>
              <td>Uses the parent element's border color</td>
              <td>border-color: inherit;</td>
            </tr>
            <tr>
              <td>border-color-current</td>
              <td>Uses the current color as the border color</td>
              <td>border-color: currentColor;</td>
            </tr>
            <tr>
              <td>border-color-white</td>
              <td>Sets the border color to white</td>
              <td>border-color: white;</td>
            </tr>
            <tr>
              <td>border-color-black</td>
              <td>Sets the border color to black</td>
              <td>border-color: black;</td>
            </tr>
            <tr>
              <td>border-color-[color]-[50-900]</td>
              <td>Sets the border color to a specific color and shade</td>
              <td>border-color: #hex;</td>
            </tr>
          </tbody>
        </table>
        Border Style
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Border Style</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>border-style-solid</td>
              <td>Sets the border style to solid</td>
              <td>border-style: solid;</td>
            </tr>
            <tr>
              <td>border-style-dotted</td>
              <td>Sets the border style to dotted</td>
              <td>border-style: dotted;</td>
            </tr>
            <tr>
              <td>border-style-dashed</td>
              <td>Sets the border style to dashed</td>
              <td>border-style: dashed;</td>
            </tr>
            <tr>
              <td>border-style-double</td>
              <td>Sets the border style to double</td>
              <td>border-style: double;</td>
            </tr>
            <tr>
              <td>border-style-none</td>
              <td>Removes the border style</td>
              <td>border-style: none;</td>
            </tr>
          </tbody>
        </table>
        Border Radius
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Border Radius</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>border-radius</td>
              <td>Sets the border radius for all corners</td>
              <td>border-radius: value;</td>
            </tr>
            <tr>
              <td>rounded</td>
              <td>Sets a medium border radius for all corners</td>
              <td>border-radius: 0.25rem;</td>
            </tr>
            <tr>
              <td>rounded-[sm|md|lg|xl|2xl|3xl]</td>
              <td>Sets a specific border radius for all corners</td>
              <td>border-radius: value;</td>
            </tr>
            <tr>
              <td>rounded-[full|none]</td>
              <td>Sets a full or no border radius for all corners</td>
              <td>border-radius: 9999px; or border-radius: 0;</td>
            </tr>
            <tr>
              <td>rounded-[t|r|b|l]</td>
              <td>
                Sets a specific border radius for top, right, bottom, or left
                corners
              </td>
              <td>border-top-right-radius: value; etc.</td>
            </tr>
            <tr>
              <td>rounded-[t|r|b|l]-[full|none]</td>
              <td>
                Sets a full or no border radius for top, right, bottom, or left
                corners
              </td>
              <td>
                border-top-right-radius: 9999px; or border-top-right-radius: 0;
              </td>
            </tr>
            <tr>
              <td>rounded-[t|r|b|l]-[sm|md|lg|xl|2xl|3xl]</td>
              <td>
                Sets a specific border radius for top, right, bottom, or left
                corners
              </td>
              <td>border-top-right-radius: value; etc.</td>
            </tr>
            <tr>
              <td>rounded-[tr|tl|br|bl]</td>
              <td>
                Sets a specific border radius for top-right, top-left,
                bottom-right, or bottom-left corners
              </td>
              <td>border-top-right-radius: value; etc.</td>
            </tr>
            <tr>
              <td>rounded-[tr|tl|br|bl]-[full|none]</td>
              <td>
                Sets a full or no border radius for top-right, top-left,
                bottom-right, or bottom-left corners
              </td>
              <td>
                border-top-right-radius: 9999px; or border-top-right-radius: 0;
              </td>
            </tr>
            <tr>
              <td>rounded-[tr|tl|br|bl]-[sm|md|lg|xl|2xl|3xl]</td>
              <td>
                Sets a specific border radius for top-right, top-left,
                bottom-right, or bottom-left corners
              </td>
              <td>border-top-right-radius: value; etc.</td>
            </tr>
          </tbody>
        </table>
        Border Width
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Border Width</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>border-width</td>
              <td>Sets the border width for all sides</td>
              <td>border-width: value;</td>
            </tr>
            <tr>
              <td>border-[0|2|4|8]</td>
              <td>Sets a specific border width for all sides</td>
              <td>border-width: value;</td>
            </tr>
            <tr>
              <td>border-[x|y]</td>
              <td>
                Sets a specific border width for horizontal or vertical sides
              </td>
              <td>border-left-width: value; or border-top-width: value;</td>
            </tr>
            <tr>
              <td>border-[x|y]-[0|2|4|8]</td>
              <td>
                Sets a specific border width for horizontal or vertical sides
              </td>
              <td>border-left-width: value; or border-top-width: value;</td>
            </tr>
            <tr>
              <td>border-[t|r|b|l]</td>
              <td>
                Sets a specific border width for top, right, bottom, or left
                side
              </td>
              <td>border-top-width: value; etc.</td>
            </tr>
            <tr>
              <td>border-[t|r|b|l]-[0|2|4|8]</td>
              <td>
                Sets a specific border width for top, right, bottom, or left
                side
              </td>
              <td>border-top-width: value; etc.</td>
            </tr>
          </tbody>
        </table>
        Divide Width
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Divide Width</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>divide-width</td>
              <td>Sets the width of the dividing line</td>
              <td>border-width: value;</td>
            </tr>
            <tr>
              <td>divide-[x|y]</td>
              <td>
                Sets the width of the horizontal or vertical dividing line
              </td>
              <td>border-left-width: value; or border-top-width: value;</td>
            </tr>
            <tr>
              <td>divide-[x|y]-reverse</td>
              <td>
                Sets the width of the horizontal or vertical dividing line in
                reverse direction
              </td>
              <td>border-right-width: value; or border-bottom-width: value;</td>
            </tr>
            <tr>
              <td>divide-[x|y]-[0|2|4|8]</td>
              <td>
                Sets a specific width of the horizontal or vertical dividing
                line
              </td>
              <td>border-left-width: value; or border-top-width: value;</td>
            </tr>
          </tbody>
        </table>
        Ring Width
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Ring Width</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>ring-width</td>
              <td>Sets the width of the ring</td>
              <td>border-width: value;</td>
            </tr>
            <tr>
              <td>ring</td>
              <td>Sets the width of the ring and adds a default color</td>
              <td>border-width: value; border-color: #93C5FD;</td>
            </tr>
            <tr>
              <td>ring-inset</td>
              <td>Changes the ring to an inset shadow</td>
              <td>box-shadow: inset 0 0 0 value;</td>
            </tr>
            <tr>
              <td>ring-[0|1|2|4|8]</td>
              <td>Sets a specific width for the ring</td>
              <td>border-width: value;</td>
            </tr>
          </tbody>
        </table>
        Ring Offset Width
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Ring Offset Width</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>ring-offset-width</td>
              <td>Sets the width of the ring offset</td>
              <td>border-width: value;</td>
            </tr>
            <tr>
              <td>ring-offset-[0|1|2|4|8]</td>
              <td>Sets a specific width for the ring offset</td>
              <td>border-width: value;</td>
            </tr>
          </tbody>
        </table>
        Outline Width
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Outline Width</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>outline-width</td>
              <td>Sets the width of the outline</td>
              <td>outline-width: value;</td>
            </tr>
            <tr>
              <td>outline-[0|1|2|4|8]</td>
              <td>Sets a specific width for the outline</td>
              <td>outline-width: value;</td>
            </tr>
          </tbody>
        </table>
        Outline Offset Width
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Outline Offset Width</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>outline-offset-width</td>
              <td>Sets the width of the outline offset</td>
              <td>outline-offset: value;</td>
            </tr>
            <tr>
              <td>outline-offset-[0|1|2|4|8]</td>
              <td>Sets a specific width for the outline offset</td>
              <td>outline-offset: value;</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Container</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>container</td>
              <td>Creates a centered container for content</td>
              <td>margin-left: auto; margin-right: auto;</td>
            </tr>
          </tbody>
        </table>
        Display
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Display</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[block|inline|inline-block]</td>
              <td>
                Sets the display property to block, inline, or inline-block
              </td>
              <td>
                display: block; or display: inline; or display: inline-block;
              </td>
            </tr>
            <tr>
              <td>[flex|inline-flex]</td>
              <td>Sets the display property to flex or inline-flex</td>
              <td>display: flex; or display: inline-flex;</td>
            </tr>
            <tr>
              <td>[grid|inline-grid]</td>
              <td>Sets the display property to grid or inline-grid</td>
              <td>display: grid; or display: inline-grid;</td>
            </tr>
            <tr>
              <td>table</td>
              <td>Sets the display property to table</td>
              <td>display: table;</td>
            </tr>
          </tbody>
        </table>
        Break [Before|After]
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Break [Before|After]</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>break-[before|after]-auto</td>
              <td>Sets the break-before or break-after property to auto</td>
              <td>break-before: auto; or break-after: auto;</td>
            </tr>
            <tr>
              <td>break-[before|after]-all</td>
              <td>Sets the break-before or break-after property to all</td>
              <td>break-before: all; or break-after: all;</td>
            </tr>
            <tr>
              <td>break-[before|after]-[avoid|avoid-page]</td>
              <td>
                Sets the break-before or break-after property to avoid or
                avoid-page
              </td>
              <td>
                break-before: avoid; or break-after: avoid; or break-before:
                avoid-page; or break-after: avoid-page;
              </td>
            </tr>
            <tr>
              <td>break-[before|after]-page</td>
              <td>Sets the break-before or break-after property to page</td>
              <td>break-before: page; or break-after: page;</td>
            </tr>
            <tr>
              <td>break-[before|after]-[left|right]</td>
              <td>
                Sets the break-before or break-after property to left or right
              </td>
              <td>
                break-before: left; or break-after: left; or break-before:
                right; or break-after: right;
              </td>
            </tr>
            <tr>
              <td>break-[before|after]-column</td>
              <td>Sets the break-before or break-after property to column</td>
              <td>break-before: column; or break-after: column;</td>
            </tr>
          </tbody>
        </table>
        Aspect Ratio
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Aspect Ratio</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>aspect-auto</td>
              <td>Sets the aspect-ratio property to auto</td>
              <td>aspect-ratio: auto;</td>
            </tr>
            <tr>
              <td>aspect-square</td>
              <td>Sets the aspect-ratio property to 1/1</td>
              <td>aspect-ratio: 1/1;</td>
            </tr>
            <tr>
              <td>aspect-video</td>
              <td>Sets the aspect-ratio property to 16/9</td>
              <td>aspect-ratio: 16/9;</td>
            </tr>
          </tbody>
        </table>
        Columns
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Columns</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>columns</td>
              <td>Sets the column-count property to auto</td>
              <td>column-count: auto;</td>
            </tr>
            <tr>
              <td>columns-[1-12]</td>
              <td>Sets the column-count property to a specific number</td>
              <td>column-count: value;</td>
            </tr>
            <tr>
              <td>columns-auto</td>
              <td>Sets the column-width property to auto</td>
              <td>column-width: auto;</td>
            </tr>
            <tr>
              <td>columns-[3xs|2xs|xs]</td>
              <td>
                Sets the column-count property to a specific responsive number
              </td>
              <td>column-count: value;</td>
            </tr>
            <tr>
              <td>columns-[sm|md|lg|xl]</td>
              <td>
                Sets the column-count property to a specific responsive number
              </td>
              <td>column-count: value;</td>
            </tr>
            <tr>
              <td>columns-[2-7]xl</td>
              <td>
                Sets the column-count property to a specific responsive number
              </td>
              <td>column-count: value;</td>
            </tr>
          </tbody>
        </table>
        Box Decoration Break
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Box Decoration Break</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>box-decoration-clone</td>
              <td>Sets the box-decoration-break property to clone</td>
              <td>box-decoration-break: clone;</td>
            </tr>
            <tr>
              <td>box-decoration-slice</td>
              <td>Sets the box-decoration-break property to slice</td>
              <td>box-decoration-break: slice;</td>
            </tr>
          </tbody>
        </table>
        Box Sizing
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Box Sizing</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>box-border</td>
              <td>Sets the box-sizing property to border-box</td>
              <td>box-sizing: border-box;</td>
            </tr>
            <tr>
              <td>box-content</td>
              <td>Sets the box-sizing property to content-box</td>
              <td>box-sizing: content-box;</td>
            </tr>
          </tbody>
        </table>
        Break Inside
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Break Inside</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>break-inside-auto</td>
              <td>Sets the break-inside property to auto</td>
              <td>break-inside: auto;</td>
            </tr>
            <tr>
              <td>break-inside-[avoid|avoid-page]</td>
              <td>Sets the break-inside property to avoid or avoid-page</td>
              <td>break-inside: avoid; or break-inside: avoid-page;</td>
            </tr>
            <tr>
              <td>break-inside-avoid-column</td>
              <td>Sets the break-inside property to avoid-column</td>
              <td>break-inside: avoid-column;</td>
            </tr>
          </tbody>
        </table>
        Isolation
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Isolation</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>isolate</td>
              <td>Sets the isolation property to isolate</td>
              <td>isolation: isolate;</td>
            </tr>
            <tr>
              <td>isolation-auto</td>
              <td>Sets the isolation property to auto</td>
              <td>isolation: auto;</td>
            </tr>
          </tbody>
        </table>
        Float
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Float</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>float-[left|right]</td>
              <td>Sets the float property to left or right</td>
              <td>float: left; or float: right;</td>
            </tr>
            <tr>
              <td>float-none</td>
              <td>Sets the float property to none</td>
              <td>float: none;</td>
            </tr>
          </tbody>
        </table>
        Positions
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Positions</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>static</td>
              <td>Sets the position property to static</td>
              <td>position: static;</td>
            </tr>
            <tr>
              <td>relative</td>
              <td>Sets the position property to relative</td>
              <td>position: relative;</td>
            </tr>
            <tr>
              <td>absolute</td>
              <td>Sets the position property to absolute</td>
              <td>position: absolute;</td>
            </tr>
            <tr>
              <td>fixed</td>
              <td>Sets the position property to fixed</td>
              <td>position: fixed;</td>
            </tr>
            <tr>
              <td>sticky</td>
              <td>Sets the position property to sticky</td>
              <td>position: sticky;</td>
            </tr>
          </tbody>
        </table>
        TRBL Positions
        <table>
          <tbody>
            <tr>
              <td>
                <strong>TRBL Positions</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[top|right|bottom|left]-[$spacing]</td>
              <td>
                Sets the top, right, bottom, or left property to a specific
                spacing value
              </td>
              <td>
                top: value; or right: value; or bottom: value; or left: value;
              </td>
            </tr>
            <tr>
              <td>[top|right|bottom|left]-[auto|full]</td>
              <td>
                Sets the top, right, bottom, or left property to auto or full
              </td>
              <td>
                top: auto; or right: auto; or bottom: auto; or left: auto; or
                top: 100%; or right: 100%; or bottom: 100%; or left: 100%;
              </td>
            </tr>
            <tr>
              <td>[top|right|bottom|left]-1/2</td>
              <td>Sets the top, right, bottom, or left property to 50%</td>
              <td>top: 50%; or right: 50%; or bottom: 50%; or left: 50%;</td>
            </tr>
            <tr>
              <td>[top|right|bottom|left]-[1-2]/3</td>
              <td>
                Sets the top, right, bottom, or left property to a specific
                fraction of the parent container
              </td>
              <td>
                top: value; or right: value; or bottom: value; or left: value;
              </td>
            </tr>
            <tr>
              <td>[top|right|bottom|left]-[1-3]/4</td>
              <td>
                Sets the top, right, bottom, or left property to a specific
                fraction of the parent container
              </td>
              <td>
                top: value; or right: value; or bottom: value; or left: value;
              </td>
            </tr>
          </tbody>
        </table>
        Overflow
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Overflow</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>overflow-auto</td>
              <td>Sets the overflow property to auto</td>
              <td>overflow: auto;</td>
            </tr>
            <tr>
              <td>overflow-[hidden|visible]</td>
              <td>Sets the overflow property to hidden or visible</td>
              <td>overflow: hidden; or overflow: visible;</td>
            </tr>
            <tr>
              <td>overflow-scroll</td>
              <td>Sets the overflow property to scroll</td>
              <td>overflow: scroll;</td>
            </tr>
            <tr>
              <td>overflow-[x|y]-auto</td>
              <td>Sets the overflow-x or overflow-y property to auto</td>
              <td>overflow-x: auto; or overflow-y: auto;</td>
            </tr>
            <tr>
              <td>overflow-[x|y]-[hidden|visible]</td>
              <td>
                Sets the overflow-x or overflow-y property to hidden or visible
              </td>
              <td>
                overflow-x: hidden; or overflow-y: hidden; or overflow-x:
                visible; or overflow-y: visible;
              </td>
            </tr>
            <tr>
              <td>overflow-[x|y]-scroll</td>
              <td>Sets the overflow-x or overflow-y property to scroll</td>
              <td>overflow-x: scroll; or overflow-y: scroll;</td>
            </tr>
          </tbody>
        </table>
        Object Fit
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Object Fit</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>object-fit</td>
              <td>Sets the object-fit property to its initial value</td>
              <td>object-fit: initial;</td>
            </tr>
            <tr>
              <td>object-contain</td>
              <td>Sets the object-fit property to contain</td>
              <td>object-fit: contain;</td>
            </tr>
            <tr>
              <td>object-cover</td>
              <td>Sets the object-fit property to cover</td>
              <td>object-fit: cover;</td>
            </tr>
            <tr>
              <td>object-fill</td>
              <td>Sets the object-fit property to fill</td>
              <td>object-fit: fill;</td>
            </tr>
            <tr>
              <td>object-none</td>
              <td>Sets the object-fit property to none</td>
              <td>object-fit: none;</td>
            </tr>
          </tbody>
        </table>
        Clear
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Clear</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>clear-[left|right]</td>
              <td>Sets the clear property to left or right</td>
              <td>clear: left; or clear: right;</td>
            </tr>
            <tr>
              <td>clear-both</td>
              <td>Sets the clear property to both</td>
              <td>clear: both;</td>
            </tr>
            <tr>
              <td>clear-none</td>
              <td>Sets the clear property to none</td>
              <td>clear: none;</td>
            </tr>
          </tbody>
        </table>
        Overscroll Behavior
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Overscroll Behavior</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>overscroll-auto</td>
              <td>Sets the overscroll-behavior property to auto</td>
              <td>overscroll-behavior: auto;</td>
            </tr>
            <tr>
              <td>overscroll-contain</td>
              <td>Sets the overscroll-behavior property to contain</td>
              <td>overscroll-behavior: contain;</td>
            </tr>
            <tr>
              <td>overscroll-none</td>
              <td>Sets the overscroll-behavior property to none</td>
              <td>overscroll-behavior: none;</td>
            </tr>
            <tr>
              <td>overscroll-[x|y]-auto</td>
              <td>
                Sets the overscroll-behavior-x or overscroll-behavior-y property
                to auto
              </td>
              <td>
                overscroll-behavior-x: auto; or overscroll-behavior-y: auto;
              </td>
            </tr>
            <tr>
              <td>overscroll-[x|y]-contain</td>
              <td>
                Sets the overscroll-behavior-x or overscroll-behavior-y property
                to contain
              </td>
              <td>
                overscroll-behavior-x: contain; or overscroll-behavior-y:
                contain;
              </td>
            </tr>
            <tr>
              <td>overscroll-[x|y]-none</td>
              <td>
                Sets the overscroll-behavior-x or overscroll-behavior-y property
                to none
              </td>
              <td>
                overscroll-behavior-x: none; or overscroll-behavior-y: none;
              </td>
            </tr>
          </tbody>
        </table>
        Object Positions
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Object Positions</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>object-center</td>
              <td>Sets the object-position property to center center</td>
              <td>object-position: center center;</td>
            </tr>
            <tr>
              <td>object-[top|bottom]</td>
              <td>Sets the object-position property to top or bottom</td>
              <td>object-position: top; or object-position: bottom;</td>
            </tr>
            <tr>
              <td>object-[left|right]</td>
              <td>Sets the object-position property to left or right</td>
              <td>object-position: left; or object-position: right;</td>
            </tr>
            <tr>
              <td>object-[left|right]-[top|bottom]</td>
              <td>
                Sets the object-position property to a specific combination of
                top, bottom, left, and right
              </td>
              <td>object-position: value;</td>
            </tr>
          </tbody>
        </table>
        Positions
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Positions</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>positions</td>
              <td>Sets the positions property to its initial value</td>
              <td>positions: initial;</td>
            </tr>
            <tr>
              <td>positions-trbl</td>
              <td>Sets the positions property to top, right, bottom, left</td>
              <td>positions: top right bottom left;</td>
            </tr>
          </tbody>
        </table>
        Z-Index
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Z-Index</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>z-[0|10|20|30|40|50]</td>
              <td>Sets the z-index property to a specific value</td>
              <td>z-index: value;</td>
            </tr>
            <tr>
              <td>z-auto</td>
              <td>Sets the z-index property to auto</td>
              <td>z-index: auto;</td>
            </tr>
          </tbody>
        </table>
        Visible
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Visible</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>visible</td>
              <td>Sets the visibility property to visible</td>
              <td>visibility: visible;</td>
            </tr>
            <tr>
              <td>invisible</td>
              <td>Sets the visibility property to hidden</td>
              <td>visibility: hidden;</td>
            </tr>
          </tbody>
        </table>
        Family
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Family</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>font-sans</td>
              <td>Sets the font-family to a sans-serif font stack</td>
              <td>font-family: sans-serif;</td>
            </tr>
            <tr>
              <td>font-serif</td>
              <td>Sets the font-family to a serif font stack</td>
              <td>font-family: serif;</td>
            </tr>
            <tr>
              <td>font-mono</td>
              <td>Sets the font-family to a monospace font stack</td>
              <td>font-family: monospace;</td>
            </tr>
          </tbody>
        </table>
        Size
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Size</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>text-[xs|sm|lg|xl]</td>
              <td>
                Sets the font-size to an extra small, small, large, or extra
                large value
              </td>
              <td>font-size: value;</td>
            </tr>
            <tr>
              <td>text-base</td>
              <td>Sets the font-size to a base value</td>
              <td>font-size: value;</td>
            </tr>
            <tr>
              <td>text-[2-9]xl</td>
              <td>Sets the font-size to a specific extra large value</td>
              <td>font-size: value;</td>
            </tr>
          </tbody>
        </table>
        Line Height
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Line Height</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>leading-[3-10]</td>
              <td>Sets the line-height to a specific value</td>
              <td>line-height: value;</td>
            </tr>
            <tr>
              <td>leading-none</td>
              <td>Sets the line-height to 1</td>
              <td>line-height: 1;</td>
            </tr>
            <tr>
              <td>leading-tight</td>
              <td>Sets the line-height to a tight value</td>
              <td>line-height: value;</td>
            </tr>
            <tr>
              <td>leading-snug</td>
              <td>Sets the line-height to a snug value</td>
              <td>line-height: value;</td>
            </tr>
            <tr>
              <td>leading-normal</td>
              <td>Sets the line-height to normal</td>
              <td>line-height: normal;</td>
            </tr>
            <tr>
              <td>leading-relaxed</td>
              <td>Sets the line-height to a relaxed value</td>
              <td>line-height: value;</td>
            </tr>
            <tr>
              <td>leading-loose</td>
              <td>Sets the line-height to a loose value</td>
              <td>line-height: value;</td>
            </tr>
          </tbody>
        </table>
        Text Alignment
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Text Alignment</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>text-[left|right]</td>
              <td>Sets the text-align property to left or right</td>
              <td>text-align: value;</td>
            </tr>
            <tr>
              <td>text-center</td>
              <td>Sets the text-align property to center</td>
              <td>text-align: center;</td>
            </tr>
            <tr>
              <td>text-justify</td>
              <td>Sets the text-align property to justify</td>
              <td>text-align: justify;</td>
            </tr>
            <tr>
              <td>text-[start|end]</td>
              <td>Sets the text-align property to start or end</td>
              <td>text-align: value;</td>
            </tr>
          </tbody>
        </table>
        Text Transform
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Text Transform</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>uppercase</td>
              <td>Sets the text-transform property to uppercase</td>
              <td>text-transform: uppercase;</td>
            </tr>
            <tr>
              <td>lowercase</td>
              <td>Sets the text-transform property to lowercase</td>
              <td>text-transform: lowercase;</td>
            </tr>
            <tr>
              <td>capitalize</td>
              <td>Sets the text-transform property to capitalize</td>
              <td>text-transform: capitalize;</td>
            </tr>
            <tr>
              <td>normal-case</td>
              <td>Sets the text-transform property to none</td>
              <td>text-transform: none;</td>
            </tr>
          </tbody>
        </table>
        Text Overflow
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Text Overflow</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>text-overflow</td>
              <td>Sets the text-overflow property to ellipsis</td>
              <td>text-overflow: ellipsis;</td>
            </tr>
            <tr>
              <td>truncate</td>
              <td>
                Sets the text-overflow property to ellipsis and white-space to
                nowrap
              </td>
              <td>text-overflow: ellipsis; white-space: nowrap;</td>
            </tr>
            <tr>
              <td>text-ellipsis</td>
              <td>
                Sets the text-overflow property to ellipsis and white-space to
                nowrap
              </td>
              <td>text-overflow: ellipsis; white-space: nowrap;</td>
            </tr>
            <tr>
              <td>text-clip</td>
              <td>Sets the text-overflow property to clip</td>
              <td>text-overflow: clip;</td>
            </tr>
          </tbody>
        </table>
        Style
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Style</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>italic</td>
              <td>Sets the font-style property to italic</td>
              <td>font-style: italic;</td>
            </tr>
            <tr>
              <td>not-italic</td>
              <td>Sets the font-style property to normal</td>
              <td>font-style: normal;</td>
            </tr>
          </tbody>
        </table>
        Weight
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Weight</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>font-[thin|extralight|light]</td>
              <td>
                Sets the font-weight property to thin, extralight, or light
              </td>
              <td>font-weight: value;</td>
            </tr>
            <tr>
              <td>font-normal</td>
              <td>Sets the font-weight property to normal</td>
              <td>font-weight: normal;</td>
            </tr>
            <tr>
              <td>font-medium</td>
              <td>Sets the font-weight property to medium</td>
              <td>font-weight: medium;</td>
            </tr>
            <tr>
              <td>font-[semibold|bold|extrabold]</td>
              <td>
                Sets the font-weight property to semibold, bold, or extrabold
              </td>
              <td>font-weight: value;</td>
            </tr>
            <tr>
              <td>font-black</td>
              <td>Sets the font-weight property to black</td>
              <td>font-weight: black;</td>
            </tr>
          </tbody>
        </table>
        Font Variant Numeric
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Font Variant Numeric</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>ordinal</td>
              <td>Sets the font-variant-numeric property to ordinal</td>
              <td>font-variant-numeric: ordinal;</td>
            </tr>
            <tr>
              <td>slashed-zero</td>
              <td>Sets the font-variant-numeric property to slashed-zero</td>
              <td>font-variant-numeric: slashed-zero;</td>
            </tr>
            <tr>
              <td>[normal|lining|tabular]-nums</td>
              <td>
                Sets the font-variant-numeric property to normal, lining, or
                tabular
              </td>
              <td>font-variant-numeric: value;</td>
            </tr>
            <tr>
              <td>[oldstyle|proportional]-nums</td>
              <td>
                Sets the font-variant-numeric property to oldstyle or
                proportional
              </td>
              <td>font-variant-numeric: value;</td>
            </tr>
            <tr>
              <td>[diagonal|stacked]-fractions</td>
              <td>
                Sets the font-variant-numeric property to diagonal or stacked
              </td>
              <td>font-variant-numeric: value;</td>
            </tr>
          </tbody>
        </table>
        Letter Spacing
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Letter Spacing</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>letter-spacing</td>
              <td>Sets the letter-spacing property to a specific value</td>
              <td>letter-spacing: value;</td>
            </tr>
            <tr>
              <td>tracking-[tight|tighter]</td>
              <td>
                Sets the letter-spacing property to a tight or tighter value
              </td>
              <td>letter-spacing: value;</td>
            </tr>
            <tr>
              <td>tracking-normal</td>
              <td>Sets the letter-spacing property to normal</td>
              <td>letter-spacing: normal;</td>
            </tr>
            <tr>
              <td>tracking-[wide|wider|widest]</td>
              <td>
                Sets the letter-spacing property to a wide, wider, or widest
                value
              </td>
              <td>letter-spacing: value;</td>
            </tr>
          </tbody>
        </table>
        [Placeholder|Text]-Color
        <table>
          <tbody>
            <tr>
              <td>
                <strong>[Placeholder|Text]-Color</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[placeholder|text]-color</td>
              <td>Sets the color property for placeholders or text</td>
              <td>color: value;</td>
            </tr>
            <tr>
              <td>[placeholder|text]-transparent</td>
              <td>
                Sets the color property for placeholders or text to transparent
              </td>
              <td>color: transparent;</td>
            </tr>
            <tr>
              <td>[placeholder|text]-current</td>
              <td>
                Sets the color property for placeholders or text to currentColor
              </td>
              <td>color: currentColor;</td>
            </tr>
            <tr>
              <td>[placeholder|text]-[white|black]</td>
              <td>
                Sets the color property for placeholders or text to white or
                black
              </td>
              <td>color: value;</td>
            </tr>
            <tr>
              <td>[placeholder|text]-[$color]-[50-900]</td>
              <td>
                Sets the color property for placeholders or text to a specific
                color
              </td>
              <td>color: value;</td>
            </tr>
          </tbody>
        </table>
        Vertical Align
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Vertical Align</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>align-baseline</td>
              <td>Sets the vertical-align property to baseline</td>
              <td>vertical-align: baseline;</td>
            </tr>
            <tr>
              <td>align-[top|middle|bottom]</td>
              <td>
                Sets the vertical-align property to top, middle, or bottom
              </td>
              <td>vertical-align: value;</td>
            </tr>
            <tr>
              <td>align-text-[top|bottom]</td>
              <td>
                Sets the vertical-align property to text-top or text-bottom
              </td>
              <td>vertical-align: value;</td>
            </tr>
            <tr>
              <td>align-[sub|super]</td>
              <td>Sets the vertical-align property to sub or super</td>
              <td>vertical-align: value;</td>
            </tr>
          </tbody>
        </table>
        Text Indent
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Text Indent</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>text-indent</td>
              <td>Sets the text-indent property to a specific value</td>
              <td>text-indent: value;</td>
            </tr>
            <tr>
              <td>indent-[$spacing]</td>
              <td>Sets the text-indent property to a specific spacing value</td>
              <td>text-indent: value;</td>
            </tr>
          </tbody>
        </table>
        Text Opacity
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Text Opacity</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>text-opacity</td>
              <td>Sets the opacity property for text</td>
              <td>opacity: value;</td>
            </tr>
            <tr>
              <td>text-opacity-[$opacity]</td>
              <td>
                Sets the opacity property for text to a specific opacity value
              </td>
              <td>opacity: value;</td>
            </tr>
          </tbody>
        </table>
        Text Decoration
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Text Decoration</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>underline</td>
              <td>Sets the text-decoration property to underline</td>
              <td>text-decoration: underline;</td>
            </tr>
            <tr>
              <td>no-underline</td>
              <td>Sets the text-decoration property to none</td>
              <td>text-decoration: none;</td>
            </tr>
            <tr>
              <td>line-through</td>
              <td>Sets the text-decoration property to line-through</td>
              <td>text-decoration: line-through;</td>
            </tr>
            <tr>
              <td>overline</td>
              <td>Sets the text-decoration property to overline</td>
              <td>text-decoration: overline;</td>
            </tr>
          </tbody>
        </table>
        Text Decoration Color
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Text Decoration Color</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>text-decoration-color</td>
              <td>Sets the color property for text-decoration</td>
              <td>color: value;</td>
            </tr>
            <tr>
              <td>decoration-inherit</td>
              <td>Sets the text-decoration-color property to inherit</td>
              <td>text-decoration-color: inherit;</td>
            </tr>
            <tr>
              <td>decoration-transparent</td>
              <td>Sets the text-decoration-color property to transparent</td>
              <td>text-decoration-color: transparent;</td>
            </tr>
            <tr>
              <td>decoration-current</td>
              <td>Sets the text-decoration-color property to currentColor</td>
              <td>text-decoration-color: currentColor;</td>
            </tr>
            <tr>
              <td>decoration-[white/black]</td>
              <td>Sets the text-decoration-color property to white or black</td>
              <td>text-decoration-color: value;</td>
            </tr>
            <tr>
              <td>decoration-[$color]-[50-900]</td>
              <td>
                Sets the text-decoration-color property to a specific color
              </td>
              <td>text-decoration-color: value;</td>
            </tr>
          </tbody>
        </table>
        Text Decoration Style
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Text Decoration Style</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>text-decoration-style</td>
              <td>
                Sets the text-decoration-style property to a specific style
              </td>
              <td>text-decoration-style: value;</td>
            </tr>
            <tr>
              <td>decoration-solid</td>
              <td>Sets the text-decoration-style property to solid</td>
              <td>text-decoration-style: solid;</td>
            </tr>
            <tr>
              <td>decoration-double</td>
              <td>Sets the text-decoration-style property to double</td>
              <td>text-decoration-style: double;</td>
            </tr>
            <tr>
              <td>decoration-dashed</td>
              <td>Sets the text-decoration-style property to dashed</td>
              <td>text-decoration-style: dashed;</td>
            </tr>
            <tr>
              <td>decoration-dotted</td>
              <td>Sets the text-decoration-style property to dotted</td>
              <td>text-decoration-style: dotted;</td>
            </tr>
            <tr>
              <td>decoration-wavy</td>
              <td>Sets the text-decoration-style property to wavy</td>
              <td>text-decoration-style: wavy;</td>
            </tr>
          </tbody>
        </table>
        Text Decoration Thickness
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Text Decoration Thickness</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>text-decoration-thickness</td>
              <td>
                Sets the text-decoration-thickness property to a specific
                thickness
              </td>
              <td>text-decoration-thickness: value;</td>
            </tr>
            <tr>
              <td>decoration-auto</td>
              <td>Sets the text-decoration-thickness property to auto</td>
              <td>text-decoration-thickness: auto;</td>
            </tr>
            <tr>
              <td>decoration-from-font</td>
              <td>Sets the text-decoration-thickness property to from-font</td>
              <td>text-decoration-thickness: from-font;</td>
            </tr>
            <tr>
              <td>decoration-[0|1|2|4|8]</td>
              <td>
                Sets the text-decoration-thickness property to a specific
                thickness
              </td>
              <td>text-decoration-thickness: value;</td>
            </tr>
          </tbody>
        </table>
        Text Underline Offset
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Text Underline Offset</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>underline-offset-auto</td>
              <td>Sets the text-underline-offset property to auto</td>
              <td>text-underline-offset: auto;</td>
            </tr>
            <tr>
              <td>underline-offset-[0|1|2|4|8]</td>
              <td>
                Sets the text-underline-offset property to a specific value
              </td>
              <td>text-underline-offset: value;</td>
            </tr>
          </tbody>
        </table>
        Smoothing
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Smoothing</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>antialiased</td>
              <td>Sets the font-smoothing property to antialiased</td>
              <td>
                -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing:
                grayscale;
              </td>
            </tr>
            <tr>
              <td>subpixel-antialiased</td>
              <td>Sets the font-smoothing property to subpixel-antialiased</td>
              <td>
                -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;
              </td>
            </tr>
          </tbody>
        </table>
        List Style Type
        <table>
          <tbody>
            <tr>
              <td>
                <strong>List Style Type</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>list-none</td>
              <td>Removes the list-style-type property</td>
              <td>list-style-type: none;</td>
            </tr>
            <tr>
              <td>list-disc</td>
              <td>Sets the list-style-type property to disc</td>
              <td>list-style-type: disc;</td>
            </tr>
            <tr>
              <td>list-decimal</td>
              <td>Sets the list-style-type property to decimal</td>
              <td>list-style-type: decimal;</td>
            </tr>
          </tbody>
        </table>
        List Style Positions
        <table>
          <tbody>
            <tr>
              <td>
                <strong>List Style Positions</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>list-inside</td>
              <td>Sets the list-style-position property to inside</td>
              <td>list-style-position: inside;</td>
            </tr>
            <tr>
              <td>list-outside</td>
              <td>Sets the list-style-position property to outside</td>
              <td>list-style-position: outside;</td>
            </tr>
          </tbody>
        </table>
        White Space
        <table>
          <tbody>
            <tr>
              <td>
                <strong>White Space</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>whitespace-normal</td>
              <td>Sets the white-space property to normal</td>
              <td>white-space: normal;</td>
            </tr>
            <tr>
              <td>whitespace-no-wrap</td>
              <td>Sets the white-space property to nowrap</td>
              <td>white-space: nowrap;</td>
            </tr>
            <tr>
              <td>whitespace-pre</td>
              <td>Sets the white-space property to pre</td>
              <td>white-space: pre;</td>
            </tr>
            <tr>
              <td>whitespace-pre-[line|wrap]</td>
              <td>Sets the white-space property to pre-line or pre-wrap</td>
              <td>white-space: value;</td>
            </tr>
          </tbody>
        </table>
        Word Break
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Word Break</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>break-normal</td>
              <td>Sets the word-break property to normal</td>
              <td>word-break: normal;</td>
            </tr>
            <tr>
              <td>break-words</td>
              <td>Sets the word-break property to break-word</td>
              <td>word-break: break-word;</td>
            </tr>
            <tr>
              <td>break-all</td>
              <td>Sets the word-break property to break-all</td>
              <td>word-break: break-all;</td>
            </tr>
            <tr>
              <td>break-keep</td>
              <td>Sets the overflow-wrap property to normal</td>
              <td>overflow-wrap: normal;</td>
            </tr>
          </tbody>
        </table>
        Content
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Content</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>content-none</td>
              <td>Removes the content property</td>
              <td>content: none;</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Background Attachment</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>bg-fixed</td>
              <td>Sets the background attachment to fixed</td>
              <td>background-attachment: fixed;</td>
            </tr>
            <tr>
              <td>bg-local</td>
              <td>Sets the background attachment to local</td>
              <td>background-attachment: local;</td>
            </tr>
            <tr>
              <td>bg-scroll</td>
              <td>Sets the background attachment to scroll</td>
              <td>background-attachment: scroll;</td>
            </tr>
          </tbody>
        </table>
        Background Clip
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Background Clip</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>bg-clip-border</td>
              <td>Sets the background clip to border-box</td>
              <td>background-clip: border-box;</td>
            </tr>
            <tr>
              <td>bg-clip-padding</td>
              <td>Sets the background clip to padding-box</td>
              <td>background-clip: padding-box;</td>
            </tr>
            <tr>
              <td>bg-clip-content</td>
              <td>Sets the background clip to content-box</td>
              <td>background-clip: content-box;</td>
            </tr>
            <tr>
              <td>bg-clip-text</td>
              <td>Sets the background clip to text</td>
              <td>background-clip: text;</td>
            </tr>
          </tbody>
        </table>
        Background Repeat
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Background Repeat</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>bg-repeat</td>
              <td>Sets the background repeat to repeat</td>
              <td>background-repeat: repeat;</td>
            </tr>
            <tr>
              <td>bg-norepeat</td>
              <td>Sets the background repeat to no-repeat</td>
              <td>background-repeat: no-repeat;</td>
            </tr>
            <tr>
              <td>bg-repeat-[x|y]</td>
              <td>Sets the background repeat to repeat-x or repeat-y</td>
              <td>
                background-repeat: repeat-x; or background-repeat: repeat-y;
              </td>
            </tr>
            <tr>
              <td>bg-repeat-round</td>
              <td>Sets the background repeat to round</td>
              <td>background-repeat: round;</td>
            </tr>
            <tr>
              <td>bg-repeat-space</td>
              <td>Sets the background repeat to space</td>
              <td>background-repeat: space;</td>
            </tr>
          </tbody>
        </table>
        Background Color/Gradient Color Stops These classes are used to define
        the background color or gradient color stops. The values for these
        classes vary based on the color or gradient you want to apply. Here's an
        example format for the classes: bg-transparent bg-[inherit|current]
        bg-[white|black] bg-[color]-[50-900] Replace [color] with the desired
        color name or hexadecimal code, and [50-900] with the desired shade or
        opacity level. Background Size
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Background Size</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>bg-auto</td>
              <td>Sets the background size to auto</td>
              <td>background-size: auto;</td>
            </tr>
            <tr>
              <td>bg-cover</td>
              <td>Sets the background size to cover</td>
              <td>background-size: cover;</td>
            </tr>
            <tr>
              <td>bg-contain</td>
              <td>Sets the background size to contain</td>
              <td>background-size: contain;</td>
            </tr>
          </tbody>
        </table>
        Background Position
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Background Position</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>bg-center</td>
              <td>Sets the background position to center</td>
              <td>background-position: center;</td>
            </tr>
            <tr>
              <td>bg-[left|right|top|bottom]</td>
              <td>
                Sets the background position to left, right, top, or bottom
              </td>
              <td>
                background-position: left; or background-position: right; or
                background-position: top; or background-position: bottom;
              </td>
            </tr>
            <tr>
              <td>bg-[left|right]-[top|bottom]</td>
              <td>
                Sets the background position to a combination of left/right and
                top/bottom
              </td>
              <td>
                background-position: left top; or background-position: left
                bottom; or background-position: right top; or
                background-position: right bottom;
              </td>
            </tr>
          </tbody>
        </table>
        Background Origin
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Background Origin</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>bg-origin-border</td>
              <td>Sets the background origin to border-box</td>
              <td>background-origin: border-box;</td>
            </tr>
            <tr>
              <td>bg-origin-padding</td>
              <td>Sets the background origin to padding-box</td>
              <td>background-origin: padding-box;</td>
            </tr>
            <tr>
              <td>bg-origin-content</td>
              <td>Sets the background origin to content-box</td>
              <td>background-origin: content-box;</td>
            </tr>
          </tbody>
        </table>
        [Accent|Caret] Color
        <table>
          <tbody>
            <tr>
              <td>
                <strong>[Accent|Caret] Color</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>accent-transparent</td>
              <td>Sets the accent or caret color to transparent</td>
              <td>accent-color: transparent;</td>
            </tr>
            <tr>
              <td>accent-[inherit|current]</td>
              <td>
                Sets the accent or caret color to inherit or current color
              </td>
              <td>accent-color: inherit;</td>
            </tr>
            <tr>
              <td>accent-white</td>
              <td>Sets the accent or caret color to white</td>
              <td>accent-color: white;</td>
            </tr>
            <tr>
              <td>accent-black</td>
              <td>Sets the accent or caret color to black</td>
              <td>accent-color: black;</td>
            </tr>
            <tr>
              <td>accent-[$color]-[50-900]</td>
              <td>
                Sets the accent or caret color to a specific color and shade
              </td>
              <td>accent-color: #{'$color'}-[50-900];</td>
            </tr>
          </tbody>
        </table>
        Appearance
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Appearance</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>appearance-none</td>
              <td>Removes the default appearance</td>
              <td>appearance: none;</td>
            </tr>
          </tbody>
        </table>
        Cursor
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Cursor</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>cursor-[none|auto|default|pointer]</td>
              <td>Sets the cursor style to none, auto, default, or pointer</td>
              <td>cursor: [none|auto|default|pointer];</td>
            </tr>
            <tr>
              <td>cursor-[wait|text|move|help]</td>
              <td>Sets the cursor style to wait, text, move, or help</td>
              <td>cursor: [wait|text|move|help];</td>
            </tr>
            <tr>
              <td>cursor-[progress|cell|crosshair]</td>
              <td>Sets the cursor style to progress, cell, or crosshair</td>
              <td>cursor: [progress|cell|crosshair];</td>
            </tr>
            <tr>
              <td>cursor-[alias|copy|no-drop]</td>
              <td>Sets the cursor style to alias, copy, or no-drop</td>
              <td>cursor: [alias|copy|no-drop];</td>
            </tr>
            <tr>
              <td>cursor-[grab|grabbing]</td>
              <td>Sets the cursor style to grab or grabbing</td>
              <td>cursor: [grab|grabbing];</td>
            </tr>
            <tr>
              <td>cursor-not-allowed</td>
              <td>Sets the cursor style to not-allowed</td>
              <td>cursor: not-allowed;</td>
            </tr>
            <tr>
              <td>cursor-context-menu</td>
              <td>Sets the cursor style to context-menu</td>
              <td>cursor: context-menu;</td>
            </tr>
            <tr>
              <td>cursor-vertical-text</td>
              <td>Sets the cursor style to vertical-text</td>
              <td>cursor: vertical-text;</td>
            </tr>
            <tr>
              <td>cursor-all-scroll</td>
              <td>Sets the cursor style to all-scroll</td>
              <td>cursor: all-scroll;</td>
            </tr>
            <tr>
              <td>cursor-[row|col]-resize</td>
              <td>Sets the cursor style to row-resize or col-resize</td>
              <td>cursor: [row|col]-resize;</td>
            </tr>
            <tr>
              <td>cursor-[n|e|s|w]-resize</td>
              <td>
                Sets the cursor style to n-resize, e-resize, s-resize, or
                w-resize
              </td>
              <td>cursor: [n|e|s|w]-resize;</td>
            </tr>
            <tr>
              <td>cursor-[ne|nw|se|sw|ew|ns]-resize</td>
              <td>
                Sets the cursor style to ne-resize, nw-resize, se-resize,
                sw-resize, ew-resize, or ns-resize
              </td>
              <td>cursor: [ne|nw|se|sw|ew|ns]-resize;</td>
            </tr>
            <tr>
              <td>cursor-[nesw|nwse]-resize</td>
              <td>Sets the cursor style to nesw-resize or nwse-resize</td>
              <td>cursor: [nesw|nwse]-resize;</td>
            </tr>
            <tr>
              <td>cursor-zoom-[in|out]</td>
              <td>Sets the cursor style to zoom-in or zoom-out</td>
              <td>cursor: zoom-[in|out];</td>
            </tr>
          </tbody>
        </table>
        Pointer Events
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Pointer Events</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>pointer-events-auto</td>
              <td>Enables pointer events</td>
              <td>pointer-events: auto;</td>
            </tr>
            <tr>
              <td>pointer-events-none</td>
              <td>Disables pointer events</td>
              <td>pointer-events: none;</td>
            </tr>
          </tbody>
        </table>
        Scroll Behavior
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Scroll Behavior</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>scroll-auto</td>
              <td>Enables the default scrolling behavior</td>
              <td>scroll-behavior: auto;</td>
            </tr>
            <tr>
              <td>scroll-smooth</td>
              <td>Enables smooth scrolling behavior</td>
              <td>scroll-behavior: smooth;</td>
            </tr>
          </tbody>
        </table>
        Scroll Margin
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Scroll Margin</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[-]scroll-m-[$spacing]</td>
              <td>Sets the scroll margin to a specific spacing value</td>
              <td>scroll-margin: [-]$spacing;</td>
            </tr>
            <tr>
              <td>[-]scroll-m[x|y]-[$spacing]</td>
              <td>
                Sets the scroll margin on the respective axis to a specific
                spacing value
              </td>
              <td>scroll-margin-[x|y]: [-]$spacing;</td>
            </tr>
            <tr>
              <td>[-]scroll-m[t|r|b|l]-[$spacing]</td>
              <td>
                Sets the scroll margin on the respective side to a specific
                spacing value
              </td>
              <td>scroll-margin-[t|r|b|l]: [-]$spacing;</td>
            </tr>
          </tbody>
        </table>
        Scroll Padding
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Scroll Padding</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>[-]scroll-p-[$spacing]</td>
              <td>Sets the scroll padding to a specific spacing value</td>
              <td>scroll-padding: [-]$spacing;</td>
            </tr>
            <tr>
              <td>[-]scroll-p[x|y]-[$spacing]</td>
              <td>
                Sets the scroll padding on the respective axis to a specific
                spacing value
              </td>
              <td>scroll-padding-[x|y]: [-]$spacing;</td>
            </tr>
            <tr>
              <td>[-]scroll-p[t|r|b|l]-[$spacing]</td>
              <td>
                Sets the scroll padding on the respective side to a specific
                spacing value
              </td>
              <td>scroll-padding-[t|r|b|l]: [-]$spacing;</td>
            </tr>
          </tbody>
        </table>
        Scroll Snap Align
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Scroll Snap Align</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>snap-start</td>
              <td>Sets the scroll snap alignment to the start</td>
              <td>scroll-snap-align: start;</td>
            </tr>
            <tr>
              <td>snap-end</td>
              <td>Sets the scroll snap alignment to the end</td>
              <td>scroll-snap-align: end;</td>
            </tr>
            <tr>
              <td>snap-center</td>
              <td>Sets the scroll snap alignment to the center</td>
              <td>scroll-snap-align: center;</td>
            </tr>
            <tr>
              <td>snap-align-none</td>
              <td>Disables the scroll snap alignment</td>
              <td>scroll-snap-align: none;</td>
            </tr>
          </tbody>
        </table>
        Scroll Snap Stop
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Scroll Snap Stop</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>snap-normal</td>
              <td>Scroll snap stops on normal intervals</td>
              <td>scroll-snap-stop: normal;</td>
            </tr>
            <tr>
              <td>snap-always</td>
              <td>Scroll snap stops on every scroll event</td>
              <td>scroll-snap-stop: always;</td>
            </tr>
          </tbody>
        </table>
        Scroll Snap Type
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Scroll Snap Type</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>snap-none</td>
              <td>Disables scroll snapping</td>
              <td>scroll-snap-type: none;</td>
            </tr>
            <tr>
              <td>snap-[x|y]</td>
              <td>Enables scroll snapping on the respective axis</td>
              <td>scroll-snap-type: [x|y];</td>
            </tr>
            <tr>
              <td>snap-both</td>
              <td>Enables scroll snapping on both axes</td>
              <td>scroll-snap-type: both;</td>
            </tr>
            <tr>
              <td>snap-mandatory</td>
              <td>Specifies that scroll snapping is mandatory</td>
              <td>scroll-snap-type: mandatory;</td>
            </tr>
            <tr>
              <td>snap-proximity</td>
              <td>Specifies that scroll snapping is based on proximity</td>
              <td>scroll-snap-type: proximity;</td>
            </tr>
          </tbody>
        </table>
        Resize
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Resize</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>resize</td>
              <td>Enables resizing of the element</td>
              <td>resize: both;</td>
            </tr>
            <tr>
              <td>resize-[x/y]</td>
              <td>Enables resizing of the element on the respective axis</td>
              <td>resize: [x|y];</td>
            </tr>
            <tr>
              <td>resize-none</td>
              <td>Disables resizing of the element</td>
              <td>resize: none;</td>
            </tr>
          </tbody>
        </table>
        Touch Action
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Touch Action</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>touch-auto</td>
              <td>Enables the default touch behavior</td>
              <td>touch-action: auto;</td>
            </tr>
            <tr>
              <td>touch-none</td>
              <td>Disables all touch events</td>
              <td>touch-action: none;</td>
            </tr>
            <tr>
              <td>touch-pan-[x|y]</td>
              <td>Enables panning on the respective axis</td>
              <td>touch-action: pan-[x|y];</td>
            </tr>
            <tr>
              <td>touch-pan-[left|right]</td>
              <td>Enables panning left or right</td>
              <td>touch-action: pan-[left|right];</td>
            </tr>
            <tr>
              <td>touch-pan-[up|down]</td>
              <td>Enables panning up or down</td>
              <td>touch-action: pan-[up|down];</td>
            </tr>
            <tr>
              <td>touch-pinch-zoom</td>
              <td>Enables pinch-zooming</td>
              <td>touch-action: pinch-zoom;</td>
            </tr>
            <tr>
              <td>touch-manipulation</td>
              <td>Enables touch manipulation gestures</td>
              <td>touch-action: manipulation;</td>
            </tr>
          </tbody>
        </table>
        User Select
        <table>
          <tbody>
            <tr>
              <td>
                <strong>User Select</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>select-none</td>
              <td>Disables text selection</td>
              <td>user-select: none;</td>
            </tr>
            <tr>
              <td>select-text</td>
              <td>Enables text selection</td>
              <td>user-select: text;</td>
            </tr>
            <tr>
              <td>select-all</td>
              <td>Allows selecting all elements</td>
              <td>user-select: all;</td>
            </tr>
            <tr>
              <td>select-auto</td>
              <td>Enables the default text selection behavior</td>
              <td>user-select: auto;</td>
            </tr>
          </tbody>
        </table>
        Will Change
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Will Change</strong>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>will-change-auto</td>
              <td>Specifies that no properties will change</td>
              <td>will-change: auto;</td>
            </tr>
            <tr>
              <td>will-change-scroll</td>
              <td>Specifies that scroll position will change</td>
              <td>will-change: scroll-position;</td>
            </tr>
            <tr>
              <td>will-change-contents</td>
              <td>Specifies that the contents will change</td>
              <td>will-change: contents;</td>
            </tr>
            <tr>
              <td>will-change-transform</td>
              <td>Specifies that transform will change</td>
              <td>will-change: transform;</td>
            </tr>
          </tbody>
        </table>
        Brightness
        <table>
          <tbody>
            <tr>
              <td>
                brightness-[0\|50\|75\|90\|95\|100\|105\|110\|125\|150\|200]
              </td>
              <td>Adjusts the brightness of the element</td>
              <td>
                filter:
                brightness(0\|50\|75\|90\|95\|100\|105\|110\|125\|150\|200);
              </td>
            </tr>
            <tr>
              <td>
                backdrop-brightness-[0\|50\|75\|90\|95\|100\|105\|110\|125\|150\|200]
              </td>
              <td>Adjusts the brightness of the element's backdrop</td>
              <td>
                backdrop-filter:
                brightness(0\|50\|75\|90\|95\|100\|105\|110\|125\|150\|200);
              </td>
            </tr>
          </tbody>
        </table>
        Blur
        <table>
          <tbody>
            <tr>
              <td>blur</td>
             
            </tr>
            <tr>
              <td>[blur\|backdrop-blur]</td>
              <td>Applies a blur effect to the element</td>
              <td>filter: blur();</td>
            </tr>
            <tr>
              <td>[blur\|backdrop-blur]-[sm\|md\|lg\|xl\|2xl\|3xl]</td>
              <td>Applies a specific degree of blur effect to the element</td>
              <td>filter: blur([sm\|md\|lg\|xl\|2xl\|3xl]px);</td>
            </tr>
            <tr>
              <td>[blur\|backdrop-blur]-none</td>
              <td>Disables the blur effect on the element</td>
              <td>filter: none;</td>
            </tr>
          </tbody>
        </table>
        Contrast
        <table>
          <tbody>
            <tr>
              <td>contrast</td>
             
            </tr>
            <tr>
              <td>contrast-[0\|50\|75\|100\|125\|150\|200]</td>
              <td>Adjusts the contrast of the element</td>
              <td>filter: contrast([0\|50\|75\|100\|125\|150\|200]);</td>
            </tr>
            <tr>
              <td>backdrop-contrast-[0\|50\|75\|100\|125\|150\|200]</td>
              <td>Adjusts the contrast of the element's backdrop</td>
              <td>
                backdrop-filter: contrast([0\|50\|75\|100\|125\|150\|200]);
              </td>
            </tr>
          </tbody>
        </table>
        Drop Shadow
        <table>
          <tbody>
            <tr>
              <td>drop-shadow</td>
            
            </tr>
            <tr>
              <td>drop-shadow-[sm\|md\|lg\|xl\|2xl]</td>
              <td>Applies a specific size of drop shadow to the element</td>
              <td>
                filter: drop-shadow([sm\|md\|lg\|xl\|2xl]px
                [sm\|md\|lg\|xl\|2xl]px [sm\|md\|lg\|xl\|2xl]px
                [sm\|md\|lg\|xl\|2xl]px);
              </td>
            </tr>
            <tr>
              <td>drop-shadow-none</td>
              <td>Disables the drop shadow on the element</td>
              <td>filter: none;</td>
            </tr>
          </tbody>
        </table>
        >Hue Rotate
        <table>
          <tbody>
            <tr>
              <td>hue-rotate</td>
              <td>Applies a hue rotation to the element</td>
              <td>filter: hue-rotate();</td>
            </tr>
            <tr>
              <td>hue-rotate-[0\|15\|30\|60\|90\|180]</td>
              <td>Applies a specific degree of hue rotation to the element</td>
              <td>filter: hue-rotate([0\|15\|30\|60\|90\|180]deg);</td>
            </tr>
            <tr>
              <td>backdrop-hue-rotate-[0\|15\|30\|60\|90\|180]</td>
              <td>
                Applies a specific degree of hue rotation to the element's
                backdrop
              </td>
              <td>backdrop-filter: hue-rotate([0\|15\|30\|60\|90\|180]deg);</td>
            </tr>
          </tbody>
        </table>
        Backdrop Opacity
        <table>
          <tbody>
            <tr>
              <td>backdrop-opacity</td>
              {/* <td>Adjusts the opacity of the element's backdrop</td>
              <td>backdrop-filter: opacity();</td> */}
            </tr>
            <tr>
              <td>backdrop-opacity-[$opacity]</td>
              <td>Adjusts the opacity of the element's backdrop</td>
              <td>backdrop-filter: opacity([$opacity]);</td>
            </tr>
          </tbody>
        </table>
        Saturate
        <table>
          <tbody>
            <tr>
              <td>saturate</td>
            </tr>
            <tr>
              <td>saturate-[0\|50\|100\|150\|200]</td>
              <td>Adjusts the saturation of the element</td>
              <td>filter: saturate([0\|50\|100\|150\|200]);</td>
            </tr>
            <tr>
              <td>backdrop-saturate-[0\|50\|100\|150\|200]</td>
              <td>Adjusts the saturation of the element's backdrop</td>
              <td>backdrop-filter: saturate([0\|50\|100\|150\|200]);</td>
            </tr>
          </tbody>
        </table>
        [Grayscale | Invert | Sepia]
        <table>
          <tbody>
            <tr>
              <td> [Grayscale | Invert | Sepia]</td>
            </tr>
            <tr>
              <td>[grayscale\|invert\|sepia]-0</td>
              <td>
                Applies the grayscale, invert, or sepia effect to the element
              </td>
              <td>filter: [grayscale\|invert\|sepia](0%);</td>
            </tr>
            <tr>
              <td>[grayscale\|invert\|sepia]</td>
              <td>
                Applies the grayscale, invert, or sepia effect to the element
              </td>
              <td>filter: [grayscale\|invert\|sepia](100%);</td>
            </tr>
            <tr>
              <td>backdrop-[grayscale\|invert\|sepia]-0</td>
              <td>
                Applies the grayscale, invert, or sepia effect to the element's
                backdrop
              </td>
              <td>backdrop-filter: [grayscale\|invert\|sepia](0%);</td>
            </tr>
            <tr>
              <td>backdrop-[grayscale\|invert\|sepia]</td>
              <td>
                Applies the grayscale, invert, or sepia effect to the element's
                backdrop
              </td>
              <td>backdrop-filter: [grayscale\|invert\|sepia](100%);</td>
            </tr>
          </tbody>
        </table>
        <table>
  <tbody>
    <tr>
      <td>
        <strong>border-collapse</strong>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>border-collapse</td>
      <td>Specifies whether table borders should be collapsed into a single border or separated</td>
      <td>border-collapse: collapse;</td>
    </tr>
    <tr>
      <td>border-separate</td>
      <td>Specifies that table borders should be separated</td>
      <td>border-collapse: separate;</td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
      <td>
        <strong>border-spacing</strong>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>border-spacing</td>
      <td>Specifies the space between adjacent cells in a table</td>
      <td>border-spacing: 0;</td>
    </tr>
    <tr>
      <td>border-spacing-[$spacing]</td>
      <td>Specifies a custom spacing between adjacent cells in a table</td>
      <td>border-spacing: [$spacing];</td>
    </tr>
    <tr>
      <td>border-spacing-[x|y]-[$spacing]</td>
      <td>Specifies custom spacing between cells on the respective axis in a table</td>
      <td>border-spacing: [x|y] [$spacing];</td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
      <td>
        <strong>table-layout</strong>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>table-layout</td>
      <td>Specifies the algorithm used to lay out the table</td>
      <td>table-layout: auto;</td>
    </tr>
    <tr>
      <td>table-auto</td>
      <td>Specifies automatic table layout</td>
      <td>table-layout: auto;</td>
    </tr>
    <tr>
      <td>table-fixed</td>
      <td>Specifies fixed table layout</td>
      <td>table-layout: fixed;</td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
      <td>
        <strong>[width|height]</strong>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>[w|h]-[$spacing]</td>
      <td>Specifies a custom width or height with a specific spacing value</td>
      <td>[width|height]: [$spacing];</td>
    </tr>
    <tr>
      <td>[w|h]-[auto|full|screen|fit]</td>
      <td>Specifies a width or height value as auto, full, screen, or fit</td>
      <td>[width|height]: [auto|full|screen|fit];</td>
    </tr>
    <tr>
      <td>[w|h]-[min|max]</td>
      <td>Specifies a minimum or maximum width or height</td>
      <td>[width|height]: [min|max];</td>
    </tr>
    <tr>
      <td>[w|h]-1/2</td>
      <td>Specifies a width or height as one-half of the parent container</td>
      <td>[width|height]: 50%;</td>
    </tr>
    <tr>
      <td>[w|h]-[1-2]/3</td>
      <td>Specifies a width or height as one-third of the parent container</td>
      <td>[width|height]: (1/2) * 33.33%;</td>
    </tr>
    <tr>
      <td>[w|h]-[1-3]/4</td>
      <td>Specifies a width or height as one-fourth of the parent container</td>
      <td>[width|height]: (1/3) * 25%;</td>
    </tr>
    <tr>
      <td>[w|h]-[1-4]/5</td>
      <td>Specifies a width or height as one-fifth of the parent container</td>
      <td>[width|height]: (1/4) * 20%;</td>
    </tr>
    <tr>
      <td>[w|h]-[1-5]/6</td>
      <td>Specifies a width or height as one-sixth of the parent container</td>
      <td>[width|height]: (1/5) * 16.66%;</td>
    </tr>
    <tr>
      <td>w-[1-11]/12</td>
      <td>Specifies a width as a fraction of the parent container</td>
      <td>width: (1/12) * [1-11]%;</td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
      <td>
        <strong>max-width</strong>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>max-width</td>
      <td>Specifies the maximum width of an element</td>
      <td>max-width: none;</td>
    </tr>
    <tr>
      <td>max-w-0</td>
      <td>Specifies a maximum width of 0</td>
      <td>max-width: 0;</td>
    </tr>
    <tr>
      <td>max-w-none</td>
      <td>Specifies no maximum width</td>
      <td>max-width: none;</td>
    </tr>
    <tr>
      <td>max-w-[xs|sm|md|lg|xl]</td>
      <td>Specifies the maximum width based on predefined breakpoints</td>
      <td>max-width: [xs|sm|md|lg|xl];</td>
    </tr>
    <tr>
      <td>max-w-[2-7]xl</td>
      <td>Specifies the maximum width with values from 2xl to 7xl</td>
      <td>max-width: [2-7]xl;</td>
    </tr>
    <tr>
      <td>max-w-prose</td>
      <td>Specifies the maximum width suitable for text content (prose)</td>
      <td>max-width: 65ch;</td>
    </tr>
    <tr>
      <td>max-w-screen-[xs|sm|md]</td>
      <td>Specifies the maximum width based on the screen size</td>
      <td>max-width: 100vw;</td>
    </tr>
    <tr>
      <td>max-w-screen-[lg|xl|2xl]</td>
      <td>Specifies the maximum width based on larger screen sizes</td>
      <td>max-width: [lg|xl|2xl];</td>
    </tr>
    <tr>
      <td>max-w-[full|fit]</td>
      <td>Specifies the maximum width as full or fit</td>
      <td>max-width: [full|fit];</td>
    </tr>
    <tr>
      <td>max-w-[min|max]</td>
      <td>Specifies the maximum width as minimum or maximum</td>
      <td>max-width: [min|max];</td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
      <td>
        <strong>min-[width|height]</strong>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>min-[width|height]</td>
      <td>Specifies the minimum width or height of an element</td>
      <td>min-[width|height]: 0;</td>
    </tr>
    <tr>
      <td>min-h-screen</td>
      <td>Specifies the minimum height as the screen height</td>
      <td>min-height: 100vh;</td>
    </tr>
    <tr>
      <td>min-[w|h]-0</td>
      <td>Specifies a minimum width or height of 0</td>
      <td>min-[width|height]: 0;</td>
    </tr>
    <tr>
      <td>min-[w|h]-[full|fit]</td>
      <td>Specifies a minimum width or height as full or fit</td>
      <td>min-[width|height]: [full|fit];</td>
    </tr>
    <tr>
      <td>min-[w|h]-[min|max]</td>
      <td>Specifies a minimum width or height as minimum or maximum</td>
      <td>min-[width|height]: [min|max];</td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
      <td>
        <strong>transition</strong>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>transition-none</td>
      <td>Disables transitions</td>
      <td>transition: none;</td>
    </tr>
    <tr>
      <td>transition-all</td>
      <td>Applies transitions to all properties</td>
      <td>transition: all;</td>
    </tr>
    <tr>
      <td>transition</td>
      <td>Specifies custom transitions</td>
      <td>transition: [property] [duration] [timing-function] [delay];</td>
    </tr>
    <tr>
      <td>transition-colors</td>
      <td>Applies transitions to color-related properties</td>
      <td>transition: colors;</td>
    </tr>
    <tr>
      <td>transition-opacity</td>
      <td>Applies transitions to the opacity property</td>
      <td>transition: opacity;</td>
    </tr>
    <tr>
      <td>transition-shadow</td>
      <td>Applies transitions to box shadow-related properties</td>
      <td>transition: box-shadow;</td>
    </tr>
    <tr>
      <td>transition-transform</td>
      <td>Applies transitions to transform-related properties</td>
      <td>transition: transform;</td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
      <td>
        <strong>timing function</strong>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>ease-linear</td>
      <td>Specifies a linear timing function</td>
      <td>transition-timing-function: linear;</td>
    </tr>
    <tr>
      <td>ease-in</td>
      <td>Specifies an ease-in timing function</td>
      <td>transition-timing-function: ease-in;</td>
    </tr>
    <tr>
      <td>ease-out</td>
      <td>Specifies an ease-out timing function</td>
      <td>transition-timing-function: ease-out;</td>
    </tr>
    <tr>
      <td>ease-in-out</td>
      <td>Specifies an ease-in-out timing function</td>
      <td>transition-timing-function: ease-in-out;</td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
      <td>
        <strong>[duration|delay]</strong>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>[duration|delay]-[75|100|150|200]</td>
      <td>Specifies a custom duration or delay in milliseconds</td>
      <td>[duration|delay]: [75|100|150|200]ms;</td>
    </tr>
    <tr>
      <td>[duration|delay]-[300|500|700|1000]</td>
      <td>Specifies a custom duration or delay in milliseconds</td>
      <td>[duration|delay]: [300|500|700|1000]ms;</td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
      <td>
        <strong>animation</strong>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>animate-none</td>
      <td>Disables animations</td>
      <td>animation: none;</td>
    </tr>
    <tr>
      <td>animate-spin</td>
      <td>Applies a spinning animation</td>
      <td>animation: spin;</td>
    </tr>
    <tr>
      <td>animate-ping</td>
      <td>Applies a pulsating animation</td>
      <td>animation: ping;</td>
    </tr>
    <tr>
      <td>animate-pulse</td>
      <td>Applies a pulsing animation</td>
      <td>animation: pulse;</td>
    </tr>
    <tr>
      <td>animate-bounce</td>
      <td>Applies a bouncing animation</td>
      <td>animation: bounce;</td>
    </tr>
  </tbody>
</table>
<table>
  <tbody>
    <tr>
      <td>
        <strong>transform-origin</strong>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>origin-[top|right|bottom|left]</td>
      <td>Specifies the transform origin on the respective side</td>
      <td>transform-origin: {'[top|right|bottom|left]'};</td>
    </tr>
    <tr>
      <td>origin-[top|bottom]-[right|left]</td>
      <td>Specifies the transform origin on the respective corner</td>
      <td>transform-origin: {'[top|bottom] [right|left]'};</td>
    </tr>
    <tr>
      <td>origin-center</td>
      <td>Specifies the transform origin at the center</td>
      <td>transform-origin: center;</td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
      <td>
        <strong>translate</strong>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>{'{-}translate-[x|y]-[$spacing]'}</td>
      <td>Translates the element by a custom amount on the respective axis</td>
      <td>transform: translate({'[x|y]([$spacing])'});</td>
    </tr>
    <tr>
      <td>{'{-}translate-[x|y]-1/2'}</td>
      <td>Translates the element by half of its width or height on the respective axis</td>
      <td>transform: translate({'[x|y](-50%)'});</td>
    </tr>
    <tr>
      <td>{'{-}translate-[x|y]-[1|2]/3'}</td>
      <td>Translates the element by one-third or two-thirds of its width or height on the respective axis</td>
      <td>transform: translate({'[x|y]([1|2]/3 * 100%)'});</td>
    </tr>
    <tr>
      <td>{'{-}translate-[x|y]-[1|2|3]/4'}</td>
      <td>Translates the element by one-fourth, half, or three-fourths of its width or height on the respective axis</td>
      <td>transform: translate({'[x|y]([1|2|3]/4 * 100%)'});</td>
    </tr>
    <tr>
      <td>{'{-}translate-[x|y]-[full|]'}</td>
      <td>Translates the element to the full width or height on the respective axis</td>
      <td>transform: translate({'[x|y]([full|100%])'});</td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
      <td>
        <strong>scale</strong>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>scale</td>
      <td>Scales the element uniformly on both axes</td>
      <td>transform: scale();</td>
    </tr>
    <tr>
      <td>scale-[0|50|75|90|95|100]</td>
      <td>Scales the element by a custom percentage</td>
      <td>transform: scale({'[0|50|75|90|95|100]'})</td>
    </tr>
    <tr>
      <td>scale-[105|110|125|150]</td>
      <td>Scales the element by a custom percentage</td>
      <td>transform: scale({'[105|110|125|150]'})</td>
    </tr>
    <tr>
      <td>scale-[x|y]-[0|50|75|90|95|100]</td>
      <td>Scales the element on the respective axis by a custom percentage</td>
      <td>transform: scale({'[x|y]([0|50|75|90|95|100])'})</td>
    </tr>
    <tr>
      <td>scale-[x|y]-[105|110|125|150]</td>
      <td>Scales the element on the respective axis by a custom percentage</td>
      <td>transform: scale({'[x|y]([105|110|125|150])'})</td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
      <td>
        <strong>skew</strong>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>{'{-}skew-[x|y]-[0.1.2.3.6.12]'}</td>
      <td>Skews the element by a custom angle on the respective axis</td>
      <td>transform: skew({'[x|y]([0.1.2.3.6.12]deg)'})</td>
    </tr>
  </tbody>
</table>

<table>
  <tbody>
    <tr>
      <td>
        <strong>rotate</strong>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>rotate-[0.1.2.3.6.12.45.90.180]</td>
      <td>Rotates the element by a custom angle</td>
      <td>transform: rotate({'[0.1.2.3.6.12.45.90.180]'}deg)</td>
    </tr>
    <tr>
      <td>-rotate-[1.2.3.6.12.45.90.180]</td>
      <td>Rotates the element by a negative custom angle</td>
      <td>transform: rotate(-{'[1.2.3.6.12.45.90.180]'}deg)</td>
    </tr>
  </tbody>
</table>
<table>
  <tbody>
    <tr>
      <td>
        <strong>[mix|background]-blend-mode</strong>
      </td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>[mix|bg]-blend-normal</td>
      <td>Sets the blend mode to normal</td>
      <td>{`background-blend-mode: 'normal';`}</td>
    </tr>
    <tr>
      <td>[mix|bg]-blend-multiply</td>
      <td>Sets the blend mode to multiply</td>
      <td>{`background-blend-mode: 'multiply';`}</td>
    </tr>
    <tr>
      <td>[mix|bg]-blend-screen</td>
      <td>Sets the blend mode to screen</td>
      <td>{`background-blend-mode: 'screen';`}</td>
    </tr>
    <tr>
      <td>[mix|bg]-blend-overlay</td>
      <td>Sets the blend mode to overlay</td>
      <td>{`background-blend-mode: 'overlay';`}</td>
    </tr>
    <tr>
      <td>[mix|bg]-blend-{"darken"}</td>
      <td>Sets the blend mode to darken</td>
      <td>{`background-blend-mode: '{darken}';`}</td>
    </tr>
    <tr>
      <td>[mix|bg]-blend-{"lighten"}</td>
      <td>Sets the blend mode to lighten</td>
      <td>{`background-blend-mode: '{lighten}';`}</td>
    </tr>
    <tr>
      <td>[mix|bg]-blend-color</td>
      <td>Sets the blend mode to color</td>
      <td>{`background-blend-mode: 'color';`}</td>
    </tr>
    <tr>
      <td>[mix|bg]-blend-color-dodge</td>
      <td>Sets the blend mode to color-dodge</td>
      <td>{`background-blend-mode: 'color-dodge';`}</td>
    </tr>
    <tr>
      <td>[mix|bg]-blend-color-burn</td>
      <td>Sets the blend mode to color-burn</td>
      <td>{`background-blend-mode: 'color-burn';`}</td>
    </tr>
    <tr>
      <td>[mix|bg]-blend-soft-light</td>
      <td>Sets the blend mode to soft-light</td>
      <td>{`background-blend-mode: 'soft-light';`}</td>
    </tr>
    <tr>
      <td>[mix|bg]-blend-hard-light</td>
      <td>Sets the blend mode to hard-light</td>
      <td>{`background-blend-mode: 'hard-light';`}</td>
    </tr>
    <tr>
      <td>[mix|bg]-blend-difference</td>
      <td>Sets the blend mode to difference</td>
      <td>{`background-blend-mode: 'difference';`}</td>
    </tr>
    <tr>
      <td>[mix|bg]-blend-exclusion</td>
      <td>Sets the blend mode to exclusion</td>
      <td>{`background-blend-mode: 'exclusion';`}</td>
    </tr>
    <tr>
      <td>[mix|bg]-blend-hue</td>
      <td>Sets the blend mode to hue</td>
      <td>{`background-blend-mode: 'hue';`}</td>
    </tr>
    <tr>
      <td>[mix|bg]-blend-saturation</td>
      <td>Sets the blend mode to saturation</td>
      <td>{`background-blend-mode: 'saturation';`}</td>
    </tr>
    <tr>
      <td>[mix|bg]-blend-luminosity</td>
      <td>Sets the blend mode to luminosity</td>
      <td>{`background-blend-mode: 'luminosity';`}</td>
    </tr>
  </tbody>
</table>

      </div>
    </div>
  );
}

export default test2;
