import React from 'react';
import { FC } from 'react';
import { NavLink } from "react-router-dom"

export const Sp25_61A: FC = () => {

    return (
    <div className='black_color' style={{ fontSize: "14px"}}>
        <div style={{ margin: "1rem auto", maxWidth: "60%", overflowX: "auto", display: "block" }}>
            <div style={{ margin: "1rem auto" }}><NavLink to="/" rel="noopener noreferrer">Return Home</NavLink></div>
            <table className="table_sp25">
            <thead>
                <tr>
                    <th>Disc</th>
                    <th>Topical Slides</th>
                    <th>Videos</th>
                    <th>Problems</th>
                </tr>
            </thead>
            <tbody style={{backgroundColor: "rgb(247, 247, 247)"}}>
                <tr>
                    <td>01</td>
                    <td>
                        <a href="https://rayzhao1.github.io/#/fa23/fundamentals" target="_blank">Variables/Functions/Control</a>
                        <br />
                        <a href="https://rayzhao1.github.io/#/fa23/env" target="_blank">Environments</a>
                        <br />
                        <a href="https://docs.google.com/presentation/d/e/2PACX-1vQWw5iZ0d43I61_ciKTkLuNTj1X0gGw_0FBLnKjRr5LtPq4jmPlw05ctCiVdBGSxGE5JoV7Y0BZoDMP/pub?start=false&amp;loop=false&amp;delayms=60000" target="_blank">Boolean Expressions</a>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>
                        <a href="https://docs.google.com/presentation/d/e/2PACX-1vTYV1WoZd834PKJMF5X1hpdFtsFTvKZBVJAbxKVZ4dGZrMZywzZXZO2xo04vBeUhimjGssUALRfebFd/pub?start=false&amp;loop=false&amp;delayms=60000" target="_blank">Currying</a>
                        <br />
                        <a href="https://docs.google.com/presentation/d/e/2PACX-1vR5kGlDCRbfsMU6lUeBOGrDhzCUZ0zxrzz4CIk8osIEn2afaLuJSXJ4q7UU5gUZ-nuqyn49jNHjnhPc/pub?start=false&amp;loop=false&amp;delayms=60000" target="_blank">Lambdas</a>
                        <br />
                        <a href="https://docs.google.com/presentation/d/e/2PACX-1vQGwHrsqhYhZvLTpxBlva5ipTfYlRJgQpm-WelsYSx13IDyCqPXPUfBBh4XV5dsW9x8PiAbCxZsTbVo/pub?start=false&amp;loop=false&amp;delayms=60000" target="_blank">Higher-Order Functions</a>
                        <br />
                        <a href="https://docs.google.com/presentation/d/e/2PACX-1vSW-MmfPYyEMf8bAqBKBK-aCUhX3KGSPGuxWjRkxo0fDgBsR6t1Fg_oeGQakxS5nUCE27V7T6gNvvJw/pub?start=false&amp;loop=false&amp;delayms=60000" target="_blank">Higher-Order Environments</a>
                    </td>
                    <td><a href="https://youtu.be/6Yn72Q4_hxs?si=Kg7nL4k-aSrojMJQ" target="_blank">Higher-Order Environments</a></td>
                    <td></td>
                </tr>
                <tr>
                    <td>03 (<a href="https://docs.google.com/presentation/d/e/2PACX-1vQqFmNx459pK3BhofYROfO-iuCqBdpk5qMb9PR9W1PerbglUQ4OMDElO0RD53CA0vC4e6k0Gi23Xmjy/pub?start=false&amp;loop=false&amp;delayms=3000" target="_blank">Slides</a>)</td>
                    <td><a href="https://rayzhao1.github.io/#/fa23/recursion" target="_blank">Recursion</a></td>
                    <td></td>
                    <td><a href="https://rayzhao1.gitbook.io/probs/recursion" target="_blank">Recursion</a></td>
                </tr>
                <tr>
                    <td>04 (<a href="https://docs.google.com/presentation/d/e/2PACX-1vRn4NzLq3yyylhcmvluTxos8cSGZUYeUG8Z6xbt8-cCgvSEStSX-IexXNGCUoJAkf23HcD0wk2jMW6q/pub?start=false&amp;loop=false&amp;delayms=3000" target="_blank">Slides</a>)</td>
                    <td>
                        <a href="https://rayzhao1.github.io/#/fa23/tree-recursion" target="_blank">Tree Recursion</a>
                        <br />
                        <a href="https://rayzhao1.github.io/#/fa23/seq" target="_blank">Sequences</a>
                    </td>
                    <td></td>
                    <td>
                        <a href="https://rayzhao1.gitbook.io/probs/tree-recursion" target="_blank">Tree Recursion</a>
                        <br />
                        <a href="https://rayzhao1.gitbook.io/probs/sequences-and-comprehensions" target="_blank">Sequences, List Comps</a>
                    </td>
                </tr>
                <tr>
                    <td>05</td>
                    <td><a href="https://rayzhao1.github.io/#/fa23/tree-adt" target="_blank">Tree ADT</a></td>
                    <td><a href="https://youtu.be/nsg5NINUGcY?si=L3HmDO1NB2oH8teQ" target="_blank">Tree ADT</a></td>
                    <td>
                        <a href="https://rayzhao1.gitbook.io/probs/dictionaries-adts" target="_blank">Dictionaries &amp; ADTs</a>
                        <br />
                        <a href="https://rayzhao1.gitbook.io/probs/immutable-trees" target="_blank">Immutable Trees</a>
                    </td>
                </tr>
                <tr>
                    <td>06</td>
                    <td>
                        <a href="https://docs.google.com/presentation/d/e/2PACX-1vTTquOV8rrfRb6a6w-NEwxHDLl5xxZXGeleeDzCb-OyRq7ahzhgOY51eepHZdQJSoudNqDeNIrbXDBF/pub?start=false&amp;loop=false&amp;delayms=3000" target="_blank">Generators</a>
                        <br />
                        <a href="https://rayzhao1.github.io/#/fa23/iter" target="_blank">Iterables/Iterators</a>
                    </td>
                    <td><a href="https://youtu.be/u-kXQgzhork?si=SUjYkjvv4oAjeiqa" target="_blank">Iterables/Iterators/Generators</a></td>
                    <td><a href="https://rayzhao1.gitbook.io/probs/generators" target="_blank">Generators</a></td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>
                        <a href="https://rayzhao1.github.io/#/fa23/mutability" target="_blank">Mutability</a>
                        <br />
                        <a href="https://rayzhao1.github.io/#/fa23/oop" target="_blank">OOP/Inheritance/Representation</a></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>08</td>
                    <td><a href="https://rayzhao1.github.io/#/fa23/trees-links" target="_blank">Mutable Trees/Linked Lists</a></td>
                    <td></td>
                    <td>
                        <a href="https://rayzhao1.gitbook.io/probs/linked-lists" target="_blank">Linked Lists</a>
                        <br />
                        <a href="https://rayzhao1.gitbook.io/probs/mutable-trees" target="_blank">Mutable Trees</a>
                    </td>
                </tr>
                <tr>
                    <td>MT 2</td>
                    <td>
                    <a href="https://docs.google.com/presentation/d/e/2PACX-1vSA6B7CwWj_-rt4gquN0M-pYwOpGIcD-sHoMN9pjkZK6eFfZ8aVF7OoXXptlkZZQBTxKWofYZx8SY0Z/pub?start=false&amp;loop=false&amp;delayms=3000">Efficiency</a>
                        <br />
                        <a href="https://docs.google.com/document/d/e/2PACX-1vSDn-iQyP9AkuTbLeKEFzYPXNqVNhDQ7MJvl5HdRXWPEK4nZ3bb7giY5xJal_C49lV3RuGurtvy3lLi/pub?urp=gmail_link" target="_blank">Recursion writeup (Fa24)</a>
                        <br />
                        <a href="https://rayzhao1.github.io/#/su23/demo/env" target="_blank">[Demo] Fa22 Final #1 (OOP/Inheritance/Repr Env. Diagram)</a>
                        <br />
                        <a href="https://rayzhao1.github.io/#/su23/demo/nonplussed" target="_blank">[Demo] Fa18 MT2 #4 (Tree Recursion)</a>         
                    </td>
                    <td><a href="https://youtu.be/fqz0JJmd3ks?si=6MXff3_oWTE7KZ-Y" target="_blank">Me doing Fa24 MT2</a></td>
                    <td></td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
    )
};
