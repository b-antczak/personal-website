import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const styles = {
      width: '1.5rem',
      height: '1.5rem'
    };
    return (
      <div className='ph3 pb5 flex flex-row items-center justify-center'>
        <div>
          <a className='link black-60 hover-black inline-flex items-center tc br2 pv2 pr2 mr2' href='https://github.com/b-antczak' target='_blank' title='GitHub'>
            <svg style={styles} className='dib' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fillRule='evenodd' clipRule='evenodd' strokeLinejoin='round' strokeliterlimit='1.414'><path d='M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8'/></svg>
          </a>
          <a className='link black-60 hover-black inline-flex items-center mr2 tc br2 pr2' href='https://medium.com/@bartoszantczak/' target='_blank' title='Medium'>
            <svg style={styles} className='dib' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fillRule='evenodd' clipRule='evenodd' strokeLinejoin='round' strokeliterlimit='1.414'><path d='M11.824 12.628l-.276.45.798.398 2.744 1.372c.15.076.294.11.418.11.278 0 .467-.177.467-.492V5.883l-4.15 6.745zm4.096-8.67c-.004-.003 0-.01-.003-.012l-4.825-2.412c-.06-.03-.123-.038-.187-.044-.016 0-.03-.01-.047-.01-.184 0-.368.092-.467.254l-.24.39-.5.814-1.89 3.08 1.89 3.076.5.813.5.812.59.95 4.71-7.64c.02-.03.01-.06-.02-.08zm-6.27 7.045L7.17 6.97l-.295-.477-.294-.477-.25-.416v4.867l3.32 1.663.5.25.5.25-.5-.813-.5-.813zM.737 1.68L.59 1.608c-.085-.042-.166-.062-.24-.062-.206 0-.35.16-.35.427v10.162c0 .272.2.594.442.716l4.145 2.08c.107.06.208.08.3.08.257 0 .438-.2.438-.53V4.01c0-.02-.012-.04-.03-.047L.738 1.68z'/></svg>
          </a>
          <a className='link black-60 hover-black inline-flex items-center mr2 tc br2 pr2' href='https://linkedin.com/in/bartoszantczak' target='_blank' title=' LinkedIn '>
            <svg style={styles} className='dib' fill='currentColor ' xmlns='http://www.w3.org/2000/svg ' viewBox='0 0 16 16 ' fillRule='evenodd ' clipRule='evenodd ' strokeLinejoin='round ' strokeliterlimit='1.414 '><path d='M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z ' fillRule='nonzero '/></svg>
          </a>
          <a className='link black-60 hover-black inline-flex items-center tc br2' href='https://github.com/b-antczak/personal-website/blob/master/src/bartosz_antczak_resume.pdf' target='_blank ' title='Resume '>
            <svg style={styles} className='dib' fill='currentColor ' xmlns='http://www.w3.org/2000/svg ' viewBox='4 2 20 20 ' fillRule='evenodd ' clipRule='evenodd ' strokeLinejoin='round ' strokeliterlimit='1.414 '>
              <path d='M0 0h24v24H0z ' fill='none '></path>
              <path d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z '></path>
            </svg>
          </a>
        </div>
    </div>
    );
  }
}

export default Footer;
