export function Ring({ scale = 1 }: { scale?: number }) {
  return (
    <svg
      width={`${333 * scale}`}
      height={`${333 * scale}`}
      viewBox="0 0 333 333"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.3719 166.5C27.3719 243.213 89.7869 305.628 166.516 305.628C243.246 305.628 305.661 243.213 305.661 166.5C305.661 89.7869 243.229 27.3719 166.5 27.3719C89.7706 27.3719 27.3719 89.7869 27.3719 166.5ZM166.5 30.1466C241.679 30.1466 302.853 91.3212 302.853 166.5C302.853 241.679 241.679 302.853 166.5 302.853C91.3212 302.853 30.1466 241.679 30.1466 166.5C30.1466 91.3212 91.3212 30.1466 166.5 30.1466ZM322.978 166.565L322.766 174.628L322.146 182.708L311.651 181.696L312.304 172.898L317.331 173.143L317.233 175.069L314.099 174.906L313.724 179.933L320.367 180.569L320.824 174.498L320.987 168.459L308.729 168.377L308.664 171.233C308.631 172.637 308.599 174.383 308.419 176.097C308.354 176.864 308.289 177.648 308.24 178.415C308.142 179.737 308.06 180.978 307.913 182.022L307.587 184.65L321.656 186.543L321.248 189.693C321.134 190.575 320.938 191.619 320.742 192.729C320.628 193.317 320.53 193.921 320.416 194.525C319.861 198.018 319.012 201.396 318.979 201.527L318.751 202.441L308.501 200.091L309.496 195.765L310.264 191.44L315.242 192.338L314.899 194.247L311.83 193.692L311.39 196.157L310.818 198.638L317.331 200.123C317.625 198.883 318.147 196.532 318.506 194.198C318.62 193.578 318.718 192.958 318.833 192.37C319.028 191.293 319.208 190.265 319.322 189.432L319.485 188.192L307.326 186.56L307.113 188.257L306.069 194.117C305.824 195.504 305.498 196.891 305.204 198.099C305.041 198.752 304.339 201.821 304.339 201.821C304.257 202.18 304.192 202.408 304.143 202.522L317.853 206.211C317.853 206.211 316.711 210.21 316.58 210.716C316.303 211.728 315.976 212.871 315.601 213.997L313.038 221.652L303.033 217.947L303.425 217.016C303.425 217.016 303.588 216.641 303.767 216.086L305.955 209.623L310.753 211.14L310.166 212.985L307.179 212.038C307.179 212.038 305.579 216.772 305.563 216.82L311.814 219.138C311.928 218.828 313.773 213.377 313.773 213.377C314.148 212.283 314.458 211.189 314.719 210.21C314.866 209.688 315.47 207.582 315.47 207.582L303.621 204.4L301.956 210.047L301.286 212.038C300.617 214.046 299.981 215.923 299.377 217.375L298.414 219.824L311.537 225.243L310.965 226.695C310.835 227.054 310.606 227.593 310.312 228.23L308.321 232.653C307.766 233.926 307.146 235.15 306.591 236.227L304.714 239.9L295.378 235.003L297.402 231.07C297.794 230.319 298.169 229.568 298.414 228.997L299.279 227.087L303.865 229.225L303.049 230.988L300.226 229.682L300.177 229.78C299.932 230.384 299.524 231.167 299.099 231.967L297.957 234.203L303.865 237.305L304.861 235.362C305.4 234.318 306.004 233.126 306.542 231.902C306.542 231.902 308.909 226.646 309.039 226.336L297.712 221.652C297.532 222.076 297.288 222.631 296.994 223.268C296.749 223.79 295.133 227.397 294.529 228.654L291.82 233.926C291.167 235.134 290.775 235.852 290.481 236.276L302.804 243.327L301.221 246.086C300.601 247.228 299.687 248.648 298.642 250.264L297.663 251.798C297.059 252.745 296.488 253.643 295.982 254.361L294.137 256.956L285.503 250.901L286.907 248.926C287.233 248.452 287.641 247.897 288 247.31L290.4 243.556L294.66 246.249L293.631 247.881L290.987 246.216L289.633 248.322C289.257 248.942 288.833 249.53 288.474 250.036L288.196 250.427L293.648 254.247L294.366 253.235C294.839 252.549 295.394 251.668 295.998 250.737L296.994 249.187C298.022 247.604 298.903 246.2 299.507 245.106L300.144 244.013L289.502 237.925L288.653 239.41C288.147 240.324 287.462 241.369 286.744 242.479C286.336 243.115 285.911 243.768 285.487 244.437C284.72 245.71 283.838 246.918 283.071 247.979C282.728 248.469 280.574 251.488 280.541 251.537L291.265 259.666L291.363 259.878C291.569 260.302 290.062 262.495 286.842 266.455L281.537 272.576L273.751 265.476L279.546 258.817L283.414 262.032L282.174 263.518L279.758 261.51L276.444 265.313L281.374 269.801L285.356 265.215C286.858 263.371 288.327 261.494 289.11 260.482L279.333 253.072L278.256 254.443C277.179 255.846 275.873 257.478 274.47 259.062L273.539 260.139C272.446 261.412 271.417 262.604 270.503 263.501L268.692 265.411L278.828 275.351L277.75 276.477C277.424 276.82 277.048 277.212 276.575 277.652L273.066 280.998C272.054 281.994 270.96 282.957 270.063 283.708L266.994 286.368L260.172 278.338L263.518 275.433C264.154 274.878 264.791 274.339 265.248 273.882L266.749 272.446L270.21 276.151L268.79 277.473L266.668 275.204L266.586 275.269C266.129 275.726 265.46 276.314 264.774 276.902L262.881 278.534L267.206 283.61L268.79 282.239C269.704 281.455 270.732 280.574 271.695 279.595C271.695 279.595 275.857 275.612 276.085 275.367L267.337 266.782C267.01 267.108 266.586 267.533 266.064 268.006C265.656 268.398 262.783 271.14 261.771 272.07L257.283 275.955C256.091 276.934 255.291 277.538 255.177 277.636L263.958 288.784L261.461 290.743C260.449 291.575 259.013 292.603 257.609 293.583L256.009 294.709C255.095 295.362 254.23 295.982 253.496 296.471L250.819 298.185L245.074 289.355L247.212 287.984C247.669 287.69 248.208 287.348 248.73 286.972L252.353 284.393L255.308 288.49L253.741 289.616L251.913 287.086L249.872 288.539C249.334 288.931 248.746 289.306 248.257 289.633L247.751 289.959L251.39 295.541L252.435 294.872C253.137 294.415 253.986 293.811 254.883 293.158C255.373 292.815 255.879 292.44 256.385 292.097C257.854 291.053 259.274 290.057 260.237 289.257L261.232 288.474L253.643 278.844L252.288 279.905C251.488 280.541 250.46 281.276 249.366 282.043C248.746 282.484 248.11 282.924 247.473 283.398C246.298 284.279 245.057 285.062 243.948 285.748C243.425 286.074 242.936 286.385 242.511 286.678L240.242 288.131L247.522 300.307L246.673 300.797C246.673 300.797 243.605 302.592 240.504 304.306L233.289 307.995L228.719 298.495L236.57 294.48L238.969 298.903L237.272 299.818L235.787 297.059L231.298 299.361L234.187 305.367L239.606 302.592C241.679 301.45 243.752 300.258 244.862 299.605L238.561 289.078L237.06 289.943C235.64 290.775 233.763 291.852 231.82 292.799L230.449 293.501C228.997 294.252 227.626 294.954 226.467 295.443L224.067 296.537L229.437 309.056C229.437 309.774 229.144 309.904 226.81 310.835L222.272 312.63C220.591 313.332 218.828 313.92 217.653 314.311L214.633 315.34L211.32 305.334L215.515 303.914C216.331 303.653 217.114 303.359 217.686 303.115L219.612 302.347L221.423 307.081L219.612 307.766L218.502 304.861L218.404 304.894C217.8 305.138 216.951 305.465 216.102 305.726L213.752 306.526L215.841 312.859L217.016 312.467C218.159 312.092 219.905 311.504 221.521 310.835C221.521 310.835 226.875 308.713 227.185 308.566L222.288 297.32C221.88 297.5 221.309 297.728 220.656 297.989L215.156 300.144L209.508 302.054C208.904 302.266 208.349 302.429 207.909 302.543L206.897 302.837L210.863 316.466L203.045 318.555L198.393 319.632C196.94 319.926 196.059 320.073 196.059 320.073L195.129 320.22L193.137 309.872L194.133 309.725C194.133 309.725 195.831 309.464 197.446 309.056L201.772 308.06L202.963 312.957L201.086 313.414L200.352 310.378L197.903 310.949C197.006 311.178 196.092 311.357 195.422 311.488L196.679 318.033C197.006 317.967 208.464 315.176 208.464 315.176L205.069 303.408C203.534 303.849 200.58 304.665 197.61 305.285C195.586 305.808 193.447 306.167 191.897 306.444L189.155 306.934L191.326 321.02L183.328 322.048C182.153 322.195 180.978 322.276 179.917 322.358C179.394 322.391 175.249 322.717 175.249 322.717L174.596 312.206L183.393 311.439L183.948 316.482L182.022 316.694L181.679 313.61L176.652 314.001L177.06 320.661C177.06 320.661 179.231 320.497 179.786 320.448C180.798 320.383 181.957 320.302 183.083 320.155L189.122 319.387L187.261 307.277C187.261 307.277 184.34 307.652 183.671 307.734C182.43 307.897 181.027 308.093 179.59 308.174L173.714 308.615L171.021 308.68L171.38 322.88C171.38 322.88 167.218 322.995 166.663 322.995C165.602 322.995 164.443 322.962 163.285 322.929L158.421 322.799L155.205 322.554L155.891 312.026L157.947 312.19C158.6 312.255 159.433 312.287 160.265 312.304L164.705 312.418L164.607 317.462L162.664 317.429L162.713 314.311L160.2 314.246C159.318 314.246 158.421 314.181 157.751 314.132C157.67 314.132 157.245 320.775 157.245 320.775L158.486 320.873L163.301 321.003C165.015 321.052 166.777 321.101 168.083 321.036L169.34 321.003L169.03 308.746L167.316 308.795C166.271 308.827 165.015 308.795 163.676 308.746C162.925 308.729 162.142 308.697 161.359 308.68C159.628 308.68 157.866 308.533 156.446 308.419L152.741 308.142L151.304 322.309L143.307 321.297C142.131 321.134 140.972 320.922 139.944 320.742C139.422 320.644 135.325 319.91 135.325 319.91L137.349 309.562L146.049 311.031L145.314 316.042L143.404 315.764L143.861 312.695L138.9 311.814L137.626 318.359C137.626 318.359 139.781 318.735 140.32 318.833C141.332 319.012 142.458 319.224 143.584 319.371L149.607 320.138L150.847 307.946C150.847 307.946 147.926 307.57 147.273 307.489C146.032 307.342 144.612 307.179 143.209 306.901C142.409 306.754 138.377 306.036 137.398 305.84L134.786 305.236L131.555 319.045L130.624 318.833C130.004 318.702 126.805 317.984 123.704 317.037C121.125 316.352 118.562 315.503 117.387 315.111L116.114 314.589L119.346 304.632L120.276 304.959C120.276 304.959 121.892 305.53 123.524 306.036L127.768 307.244L126.397 312.108L124.536 311.586L125.385 308.582L122.969 307.897C122.072 307.619 121.19 307.326 120.554 307.113L118.448 313.43C119.738 313.854 121.974 314.589 124.243 315.176C126.528 315.878 128.845 316.433 130.118 316.727L132.909 304.779L131.245 304.388C130.249 304.126 126.299 303 125.516 302.772C124.145 302.413 122.806 301.939 121.631 301.531C120.994 301.303 120.407 301.107 119.868 300.944L118.008 300.307C117.648 300.193 117.42 300.095 117.322 300.062L112.328 313.348C112.328 313.348 108.459 311.83 107.97 311.635C106.99 311.259 105.88 310.818 104.803 310.345L97.4582 306.983L102.045 297.516L110.075 301.172L108.1 305.808L106.321 305.041L107.545 302.152L102.959 300.062L100.053 306.069C100.364 306.216 105.603 308.582 105.603 308.582C106.647 309.039 107.725 309.464 108.671 309.839C109.177 310.035 111.201 310.835 111.201 310.835L115.51 299.361L111.332 297.712C110.712 297.451 110.091 297.173 109.455 296.88L107.333 295.917C105.717 295.182 104.183 294.497 102.991 293.844L100.641 292.636L93.9817 305.171L92.5943 304.453C92.1862 304.257 91.6966 303.996 91.1253 303.653L86.9143 301.238C85.6412 300.536 84.4007 299.736 83.3887 299.083L80.0427 296.945L85.8207 288.131L89.5421 290.514C90.2439 290.971 90.9621 291.428 91.5171 291.722L93.3288 292.766L90.7662 297.124L89.1014 296.145L90.6846 293.468L90.5867 293.419C90.0154 293.109 89.2646 292.636 88.5138 292.146L86.4083 290.791L82.7522 296.374L84.4497 297.467C85.429 298.087 86.6368 298.871 87.8773 299.556C87.8773 299.556 92.8718 302.429 93.1656 302.576L98.9109 291.754C98.5028 291.542 97.9805 291.249 97.3766 290.889C96.8706 290.596 93.4267 288.621 92.2679 287.919L87.2734 284.72C86.0655 283.904 85.4127 283.479 85.0699 283.169L76.86 294.758L74.2648 292.913C73.1549 292.163 71.7838 291.085 70.3475 289.943L68.9275 288.817C68.0298 288.115 67.1974 287.462 66.5119 286.891L64.0962 284.801L70.9514 276.787L72.7958 278.387C73.2202 278.762 73.7425 279.203 74.2811 279.627L77.774 282.369L74.6728 286.352L73.1386 285.16L75.0482 282.696L73.0733 281.145C72.502 280.721 71.9471 280.231 71.49 279.839L71.1146 279.513L66.7893 284.589L67.736 285.405C68.3889 285.944 69.205 286.597 70.0864 287.282L71.5227 288.408C72.9264 289.518 74.2648 290.579 75.342 291.297L76.3703 292.032L83.454 282.027L82.0503 281.031C81.2016 280.443 80.2223 279.66 79.1777 278.828C78.5901 278.354 77.9698 277.865 77.3496 277.391C76.1581 276.493 75.0482 275.514 74.0526 274.649C73.6119 274.257 70.7882 271.825 70.7556 271.793L61.1419 282.239L60.4238 281.57C60.4238 281.57 57.8286 279.138 55.2987 276.657L49.7329 270.781L57.5348 263.713L63.6229 270.112L60.0647 273.67L58.6937 272.299L60.9134 270.079L57.4369 266.423L52.4913 270.911C52.7198 271.156 56.6861 275.318 56.6861 275.318C58.3672 276.983 60.0973 278.632 61.044 279.513L69.3519 270.487L68.0951 269.296C66.9036 268.186 65.3367 266.684 63.8677 265.084L62.9537 264.121C61.7622 262.881 60.6523 261.722 59.8199 260.71L58.0897 258.719L47.2193 267.859L46.1911 266.684C45.9299 266.39 45.5545 265.949 45.1301 265.411L42.1269 261.592C41.2292 260.498 40.3968 259.323 39.7276 258.376L37.3609 255.046L46.0115 249.024L48.5741 252.631C49.0637 253.316 49.5534 254.002 49.9451 254.492L51.2345 256.124L47.2193 259.209L46.0442 257.674L48.5088 255.781L48.4435 255.699C48.0354 255.193 47.5131 254.475 46.9908 253.741L45.5382 251.7L40.0703 255.52L41.3108 257.25C41.9963 258.229 42.7798 259.323 43.6448 260.384C43.6448 260.384 47.203 264.905 47.4315 265.166L56.8166 257.283C56.5228 256.923 56.1311 256.466 55.7067 255.895C55.3477 255.438 52.8994 252.321 52.067 251.227L48.623 246.396C47.758 245.123 47.2357 244.258 47.154 244.143L35.2064 251.815L33.4926 249.138C32.7418 248.012 31.8441 246.445 30.9627 244.927L30.065 243.36C29.4937 242.381 28.9551 241.45 28.5471 240.667L27.0944 237.827L36.4469 232.963L37.5731 235.166C37.8342 235.672 38.128 236.26 38.4871 236.848L40.7069 240.699L36.3489 243.246L35.3696 241.581L38.0627 240.014L36.8059 237.843C36.4469 237.239 36.1204 236.603 35.843 236.064L35.6144 235.607L29.7059 238.692L30.2772 239.802C30.6689 240.553 31.1912 241.45 31.7462 242.413L32.6602 243.997C33.5089 245.482 34.3903 247.016 35.1248 248.11L35.8103 249.171L46.1258 242.544L45.1954 241.091C44.6405 240.226 44.0202 239.133 43.351 237.974C42.9756 237.321 42.5839 236.635 42.1922 235.95C41.4251 234.677 40.7559 233.355 40.1683 232.196C39.8908 231.657 39.646 231.151 39.4011 230.694L38.177 228.295L25.348 234.383L22.0509 227.022L19.0803 219.481L28.9714 215.857L32.2032 224.067L27.5677 226.026L26.8169 224.247L29.7059 223.023L27.8615 218.322L21.5939 220.624L23.83 226.287L26.2946 231.804L37.3772 226.548L36.659 224.965C35.9735 223.464 35.0595 221.489 34.3087 219.465C34.0802 218.877 33.8354 218.273 33.6068 217.702C33.0519 216.315 32.5296 215.009 32.1868 213.899L31.3381 211.418L17.8235 215.809L16.8279 212.789L14.2654 203.306L13.5472 200.205L23.83 197.887L24.8257 202.212C24.9562 202.849 25.1358 203.453 25.2827 203.975L25.9845 206.44L21.1043 207.794L20.582 205.934L23.5852 205.101L23.422 204.514C23.2587 203.959 23.0792 203.29 22.9323 202.637L22.3774 200.221L15.8812 201.69L16.6647 205.101L19.064 213.393L30.7179 209.606C30.571 209.166 30.3751 208.594 30.1956 207.909L28.5797 202.245L27.2413 196.434C27.0454 195.635 26.8985 194.949 26.8333 194.459L26.719 193.807L12.7637 196.418L12.0945 192.664C11.8824 191.456 11.6049 189.938 11.4417 188.404L10.8378 183.589C10.4787 181.059 10.5929 180.929 10.8378 180.635L11.0989 180.341L21.039 179.411L21.2022 181.467L22.0509 188.176L17.0564 188.877L16.7789 186.968L19.8801 186.527L19.2599 181.516L12.6169 182.136C12.6495 182.463 12.6985 182.871 12.7637 183.328L13.384 188.176C13.5472 189.661 13.8084 191.13 14.0205 192.321L14.347 194.149L26.3926 191.897L26.0824 190.199C25.805 188.845 25.5928 187.115 25.3643 185.287L24.6298 178.366L24.4339 175.706L10.2665 176.505L10.1522 175.134C10.1196 174.743 10.087 174.09 10.087 173.274L9.95638 168.426C9.89109 166.99 9.92373 165.537 9.95638 164.362L10.0543 160.33L20.582 160.673L20.4677 165.096C20.4351 165.945 20.4187 166.777 20.4677 167.414L20.5167 169.503L15.4569 169.569L15.4242 167.626L18.5254 167.577V167.479C18.4927 166.826 18.5091 165.929 18.5254 165.031L18.5907 162.534L11.9313 162.322L11.8824 164.394C11.8497 165.602 11.8171 166.957 11.8824 168.344C11.8824 168.344 12.0293 174.106 12.0456 174.432L24.287 173.731C24.287 173.731 24.1238 167.43 24.1075 166.043L24.2544 160.183C24.2544 159.367 24.3197 158.714 24.3523 158.241L24.4176 157.425L10.2502 156.429L10.495 153.247C10.5766 152.022 10.7072 150.162 10.9847 148.35L11.6049 143.535C11.6865 142.866 11.7844 142.295 11.8497 141.887L12.1272 140.369L22.5243 142.05L22.1652 144.09C22.0999 144.482 22.0346 144.971 21.9856 145.494L21.3164 150.798L16.3056 150.227L16.5178 148.301L19.6353 148.66L20.2882 143.666L13.7104 142.605C13.6615 142.931 13.5962 143.339 13.5472 143.796L12.927 148.627C12.6658 150.39 12.5516 152.137 12.4536 153.41L12.3557 154.65L24.5808 155.499L24.7114 153.785C24.7767 152.545 24.9726 151.01 25.1847 149.378L25.8539 144.27L26.7353 139.34L12.8127 136.549L13.4493 133.415L14.5428 128.666C14.7877 127.507 15.1141 126.364 15.4079 125.369C15.5548 124.863 15.7017 124.373 15.8159 123.949L16.6973 120.864L26.8006 123.867L25.5928 128.127C25.1684 129.547 24.8257 130.983 24.7277 131.408L24.5645 132.159L23.6668 132.191L19.5863 131.179L20.0433 129.302L23.0629 130.053C23.2261 129.368 23.4546 128.486 23.7321 127.589L24.4176 125.189L18.0194 123.28C18.0194 123.28 17.4318 125.385 17.2686 125.924C16.9911 126.903 16.6647 127.997 16.4362 129.09L15.0651 135.031L27.0944 137.447C27.0944 137.447 27.7636 134.574 27.9105 133.921C28.188 132.697 28.4981 131.326 28.8735 129.955L30.4894 124.275L31.3544 121.729L17.9052 117.175L18.9334 114.156C19.2436 113.144 19.7332 111.919 20.2392 110.614C20.2392 110.614 21.1206 108.394 21.3328 107.839C21.7408 106.778 22.1325 105.782 22.4916 104.983L23.7974 102.094L33.4273 106.37L32.3174 108.835C32.1052 109.292 31.8604 109.83 31.6645 110.369L30.0323 114.515L25.3316 112.687L26.0335 110.875L28.9388 112.001L29.8528 109.667C30.065 109.096 30.3261 108.525 30.5546 108.019L30.8648 107.333L24.7767 104.624L24.2707 105.766C23.9279 106.533 23.5525 107.496 23.1445 108.524C22.9323 109.079 22.0509 111.299 22.0509 111.299C21.5449 112.556 21.0716 113.764 20.7778 114.711L20.3698 115.918L31.9747 119.852L32.5296 118.22C32.8724 117.24 33.3294 116.082 33.819 114.857C34.0965 114.156 34.3903 113.421 34.6841 112.67C35.1738 111.332 35.7777 110.026 36.3163 108.867C36.5938 108.28 36.8386 107.725 37.0671 107.219L38.177 104.754L25.4459 98.5028L25.8866 97.6378C25.8866 97.6378 27.4698 94.455 29.151 91.3375L33.1988 84.3191L42.1922 89.8033L37.7853 97.4419L33.3783 95.0263L34.3087 93.3288L37.0671 94.8304L39.5807 90.4561L33.8843 86.9959L30.8484 92.2679C29.7222 94.3571 28.645 96.4789 28.0574 97.6378L39.0747 103.04L39.8582 101.49C40.5763 100.037 41.572 98.1274 42.6982 96.2341L43.4163 94.9936C44.2487 93.541 45.0322 92.1699 45.7504 91.109L47.1704 88.8892L35.3207 81.0547L36.2673 79.5694C36.4795 79.243 36.7407 78.8186 37.0834 78.3453L39.8908 74.3954C40.7232 73.1875 41.6372 72.0124 42.388 71.0657L44.82 67.9645L53.0463 74.5586L50.3042 78.0351C49.7819 78.7043 49.2596 79.3572 48.9168 79.8795L47.709 81.577L43.6122 78.6064L44.7547 77.0395L47.2683 78.8676L47.3336 78.7859C47.6927 78.2473 48.2476 77.5455 48.8026 76.8436L50.3531 74.885L45.1465 70.7229L43.9223 72.2898C43.2041 73.2038 42.2901 74.3464 41.4903 75.5216C41.4903 75.5216 38.1607 80.2223 37.9811 80.4997L48.1987 87.257C48.4598 86.8653 48.8026 86.3756 49.2106 85.8044C49.5371 85.3474 51.8384 82.0993 52.6545 81.0057L56.327 76.3377C57.2736 75.1788 57.7633 74.5912 58.0734 74.2811L47.3336 65.0102L49.4228 62.6109C50.2552 61.6153 51.4141 60.3911 52.7525 59.0038L54.0093 57.6817C54.7927 56.8656 55.5109 56.0985 56.1474 55.4782L58.4488 53.2748L65.7774 60.8481L63.9656 62.562C63.5576 62.9537 63.0843 63.3944 62.6272 63.884L59.5587 67.0994L55.8863 63.6392L57.2084 62.2355L59.4771 64.3737L61.2072 62.562C61.6806 62.056 62.1865 61.5663 62.6272 61.1583L63.019 60.7829L58.3835 55.9842L57.4858 56.8493C56.8819 57.4369 56.1801 58.1877 55.4129 58.9874L54.1398 60.3258C52.8341 61.6806 51.6915 62.8884 50.8918 63.8514L50.0594 64.7981L59.3465 72.8121L60.4727 71.5064C61.1419 70.7229 62.007 69.8089 62.9374 68.8622C63.4597 68.3073 64.0146 67.7523 64.5532 67.1647C65.5489 66.0712 66.6261 65.0592 67.5728 64.1615C68.0135 63.7371 68.4379 63.3454 68.7969 62.9863L70.7392 61.1256L61.2725 50.5653L62.007 49.9125C62.007 49.9125 64.6675 47.5621 67.3932 45.2934L73.7751 40.3152L80.0591 48.7536L73.1059 54.1888L69.9068 50.3042L71.4084 49.08L73.3997 51.512L77.3659 48.3945L73.3834 43.0409C73.1222 43.2531 68.6011 46.795 68.6011 46.795C66.7893 48.3129 64.9776 49.8798 64.0146 50.7286L72.2082 59.8688L73.514 58.7263C74.6239 57.747 76.3213 56.278 78.1168 54.9233L79.1124 54.1398C80.4834 53.0626 81.7565 52.0506 82.8664 51.2998L85.0372 49.7656L86.1635 51.3488L83.9763 52.8994C82.9154 53.6175 81.6586 54.6132 80.3202 55.6578L79.3083 56.4576C77.5455 57.7796 75.897 59.216 74.8034 60.1953L72.0776 62.5456C71.9797 62.6436 69.3519 65.1571 68.8949 65.5815C67.9645 66.4466 66.9199 67.4259 65.9732 68.4868C65.4183 69.0744 64.8633 69.662 64.3247 70.2169C63.427 71.1473 62.5783 72.0287 61.9417 72.7795L59.5424 75.5542C59.5424 75.5542 58.7916 76.3866 57.8449 77.5455L54.2051 82.1809C53.4053 83.2582 51.1366 86.4736 50.7938 86.9469C49.8798 88.1874 49.3412 89.1014 49.3412 89.1014L48.8189 89.9828H48.7862L47.3662 92.1862C46.6644 93.2145 45.8973 94.5529 45.0975 95.9566L44.3793 97.2134C43.2694 99.0578 42.3064 100.935 41.5883 102.355L39.9398 105.57C39.8581 105.75 38.3565 109.063 38.0954 109.667C37.5731 110.777 36.9855 112.05 36.5285 113.339C36.2347 114.107 35.9409 114.841 35.6471 115.559C35.1738 116.751 34.7167 117.893 34.3903 118.84L33.2314 122.3L32.3827 124.797L30.7832 130.429C30.4078 131.734 30.114 133.089 29.8365 134.297C29.6896 134.917 28.7919 139.079 28.6776 139.618L27.7146 144.971L27.127 149.574C26.9149 151.157 26.7353 152.659 26.67 153.85L26.3926 157.523L26.3436 158.225C26.2946 158.796 26.2457 159.4 26.2457 160.102L26.0988 166.027C26.0988 167.365 26.1477 168.72 26.1804 169.96C26.1967 170.662 26.213 171.315 26.2293 171.903L26.4089 175.461L26.8169 180.896L27.3392 184.976C27.5677 186.772 27.7799 188.453 28.0411 189.759L28.694 193.382L28.8245 194.084C28.8898 194.557 29.0367 195.178 29.2163 195.928L30.5546 201.69L32.1542 207.321C32.3501 208.088 32.5622 208.692 32.7091 209.133L33.2641 210.765L34.1128 213.262C34.4393 214.323 34.9452 215.596 35.4839 216.951C35.7124 217.539 35.9572 218.143 36.202 218.763C36.9365 220.721 37.8179 222.664 38.4708 224.084L39.9724 227.397C39.9724 227.397 41.7025 230.759 41.98 231.314C42.5513 232.441 43.2041 233.73 43.9386 234.954C44.3467 235.656 44.7384 236.342 45.1138 237.011C45.7504 238.137 46.3543 239.198 46.8929 240.03L48.8515 243.099C48.8842 243.148 49.4228 244.029 50.2879 245.302L53.6991 250.101C54.4989 251.162 55.3477 252.223 56.0985 253.186C56.5392 253.741 56.9472 254.263 57.3063 254.736C58.2366 255.96 58.9548 256.744 58.9548 256.744L59.6403 257.495H59.6077L61.3378 259.502C62.1376 260.482 63.2312 261.624 64.39 262.832L65.3204 263.811C66.7567 265.378 68.291 266.847 69.4661 267.941L72.0776 270.422C72.1756 270.503 74.9177 272.87 75.3747 273.278C76.3377 274.127 77.4149 275.073 78.5574 275.922C79.194 276.412 79.8142 276.918 80.4181 277.391C81.4301 278.191 82.3931 278.958 83.2092 279.529L86.1961 281.651C86.1961 281.651 87.0775 282.304 88.3506 283.153L93.3125 286.336C94.455 287.021 97.8826 288.98 98.3886 289.274C99.7107 290.073 100.674 290.514 100.674 290.514L101.604 290.938V290.971L103.938 292.179C105.081 292.799 106.582 293.485 108.165 294.186C108.165 294.186 111.511 295.704 112.099 295.949L118.024 298.283C118.024 298.283 118.252 298.381 118.644 298.512C118.644 298.512 121.647 299.524 122.3 299.736C123.443 300.144 124.749 300.585 126.054 300.944C126.854 301.172 130.771 302.282 131.734 302.543L135.276 303.359L137.855 303.963C138.785 304.143 142.801 304.861 143.617 305.008C144.955 305.285 146.326 305.432 147.55 305.579C148.236 305.661 148.872 305.742 149.444 305.824L152.969 306.281V306.232L156.707 306.509C158.159 306.624 159.808 306.754 161.489 306.754C162.289 306.754 163.089 306.787 163.856 306.82C165.145 306.852 166.386 306.901 167.365 306.869L171.021 306.771L173.665 306.705L179.509 306.265C180.88 306.183 182.251 305.987 183.458 305.824C184.144 305.726 184.781 305.644 185.352 305.579L188.877 305.122V305.073L191.521 304.6C193.17 304.322 195.243 303.963 197.251 303.457C201.054 302.658 204.791 301.564 205.509 301.352L206.44 301.091L207.468 300.797C207.876 300.683 208.366 300.552 208.937 300.34L214.552 298.446C214.552 298.446 221.325 295.786 221.733 295.59L223.268 294.888L225.716 293.778C226.826 293.305 228.164 292.62 229.584 291.901L230.972 291.183C232.865 290.253 234.709 289.208 236.097 288.376L239.231 286.58C239.361 286.499 242.413 284.54 242.936 284.197C243.997 283.528 245.204 282.761 246.331 281.912C246.983 281.439 247.636 280.982 248.257 280.541C249.317 279.79 250.313 279.105 251.097 278.468L253.969 276.2C253.969 276.2 254.834 275.547 256.026 274.567L260.482 270.716C261.461 269.818 262.457 268.871 263.338 268.022C263.844 267.533 264.317 267.092 264.742 266.684C265.884 265.639 266.586 264.856 266.586 264.856L267.255 264.089L267.288 264.121L269.1 262.212C269.981 261.33 270.993 260.172 272.054 258.931L273.001 257.837C274.388 256.303 275.661 254.687 276.722 253.316L278.942 250.493C278.942 250.493 281.113 247.424 281.472 246.934C282.222 245.906 283.071 244.731 283.806 243.507C284.23 242.821 284.671 242.152 285.079 241.516C285.781 240.422 286.45 239.394 286.94 238.529L288.768 235.362C288.768 235.362 289.339 234.416 290.057 233.077L292.734 227.838C293.321 226.63 293.876 225.389 294.382 224.263C294.66 223.627 294.937 223.023 295.182 222.501C295.851 221.097 296.194 220.118 296.194 220.118L296.537 219.171H296.569L297.532 216.739C298.12 215.335 298.773 213.393 299.409 211.516L301.254 205.624L302.249 202.114C302.249 202.114 302.331 201.87 302.429 201.462C302.429 201.462 303.131 198.393 303.294 197.724C303.572 196.532 303.898 195.194 304.143 193.839L305.187 188.029L305.644 184.487L305.987 181.826C306.118 180.847 306.216 179.623 306.297 178.333C306.346 177.566 306.412 176.766 306.477 175.967C306.64 174.318 306.673 172.686 306.705 171.25L306.82 166.516C306.82 166.271 306.722 162.648 306.705 161.995C306.689 160.771 306.656 159.384 306.542 158.029L306.085 152.12L305.628 148.546L305.302 145.918C305.171 144.922 304.959 143.731 304.73 142.458C304.6 141.707 304.453 140.907 304.322 140.124C304.094 138.655 303.751 137.202 303.457 135.929C303.343 135.423 302.429 131.473 302.298 130.935H302.266L301.189 127.164C300.813 125.809 300.372 124.275 299.834 122.79C298.708 119.232 297.337 115.771 296.929 114.792L296.586 113.96L297.206 113.601L296.553 113.845C296.553 113.845 296.194 112.85 295.574 111.413L293.142 106.044L290.481 100.821C290.09 100.004 289.731 99.3842 289.518 98.9925L288.768 97.7031L302.837 89.8196L303.621 91.1743C303.898 91.6476 304.143 92.0883 304.42 92.6269L306.624 96.9359C307.342 98.2743 307.962 99.6617 308.468 100.788L310.051 104.281L300.405 108.541L298.577 104.509C298.234 103.726 297.875 102.975 297.581 102.42L296.635 100.559L301.156 98.2907L302.021 100.021L299.246 101.408L299.295 101.506C299.605 102.077 299.981 102.893 300.34 103.71L301.368 105.978L307.473 103.285L306.689 101.571C306.199 100.478 305.579 99.1231 304.894 97.8336C304.894 97.8336 302.249 92.7085 302.086 92.4148L291.395 98.3559C291.608 98.7477 291.869 99.27 292.195 99.9392L294.872 105.195L297.32 110.614C297.892 111.919 298.251 112.866 298.332 113.111L311.52 107.872L312.695 110.826C313.283 112.23 313.936 114.123 314.36 115.461L315.911 120.064L316.792 123.165L306.689 126.152L306.118 124.177C305.955 123.557 305.71 122.757 305.432 121.957L304.012 117.746L308.778 116.098L309.415 117.926L306.461 118.954L307.26 121.337C307.554 122.17 307.815 123.018 307.995 123.671V123.753L314.409 121.876L314.067 120.668L312.532 116.098C311.912 114.221 311.357 112.67 310.9 111.593L310.443 110.418L299.05 114.939C299.654 116.49 300.732 119.313 301.646 122.186C302.201 123.72 302.641 125.287 303.033 126.674L304.11 130.445L317.902 126.936L319.714 134.803L321.15 142.784L310.737 144.433C310.737 144.433 309.35 136.778 309.35 136.745L309.088 135.766L314.083 134.721L314.475 136.615L311.422 137.251L312.304 142.213L318.882 141.168L317.804 135.178L316.45 129.286L304.567 132.306C304.567 132.306 305.187 134.982 305.302 135.521C305.612 136.827 305.971 138.312 306.199 139.863C306.33 140.63 306.477 141.397 306.607 142.148C306.852 143.453 307.064 144.678 307.195 145.706L307.521 148.334L321.624 146.636L322.015 149.786C322.13 150.651 322.211 151.712 322.293 152.839C322.342 153.442 322.374 154.046 322.44 154.667C322.782 158.176 322.815 161.767 322.815 161.799V162.746L312.287 163.056V161.669C312.271 161.065 312.238 159.857 312.173 158.649L311.83 154.259L316.874 153.867L317.021 155.793L313.903 156.038L314.099 158.535C314.164 159.694 314.197 160.494 314.213 161.081L320.856 160.885C320.824 159.612 320.726 157.213 320.514 154.862C320.465 154.226 320.416 153.606 320.367 153.002C320.285 151.908 320.22 150.896 320.106 150.064L319.942 148.823L307.766 150.292L307.978 151.99L308.435 157.931C308.566 159.335 308.582 160.771 308.599 162.011C308.599 162.681 308.615 163.301 308.648 163.856L308.713 166.549L322.913 166.647L322.978 166.565ZM87.5835 50.4348L86.2451 51.3978L77.0395 38.1443L78.3126 37.2303C78.6391 37.0018 79.0961 36.659 79.6837 36.3L83.7641 33.6885C84.9556 32.8887 86.2124 32.1705 87.2407 31.5829L90.7499 29.5753L95.924 38.7646L92.0883 40.968C91.3538 41.3924 90.6193 41.8005 90.097 42.1595L88.3343 43.2858L85.6412 38.9931L87.2734 37.9648L88.9219 40.5926L89.0035 40.5273C89.5421 40.1683 90.3092 39.7113 91.0927 39.2706L93.2635 38.0301L89.9991 32.2195L88.1874 33.2641C87.1428 33.868 85.9676 34.5372 84.8087 35.3043C84.8087 35.3043 79.9611 38.4218 79.6837 38.6177L86.6205 48.6883C86.9959 48.4272 87.4855 48.1334 88.1058 47.7416C88.5791 47.4315 91.9251 45.2934 93.1003 44.5752L98.2417 41.6209C99.5801 40.8864 100.494 40.4457 100.625 40.3805L94.1286 27.7636L96.9523 26.3109C98.1764 25.6581 99.8902 24.8746 101.392 24.2054C101.392 24.2054 105.032 22.5569 105.848 22.2141L108.818 21.039L112.768 30.8158L110.859 31.5666C110.271 31.7951 109.487 32.1052 108.72 32.4643L104.673 34.2924L102.567 29.7059L104.33 28.8898L105.636 31.7298L107.921 30.7015C108.704 30.3261 109.536 29.9997 110.173 29.7549L110.271 29.7222L107.774 23.5362L106.615 23.9932C105.831 24.3197 104.868 24.7604 103.856 25.2174L102.208 25.9519C100.739 26.6047 99.0578 27.3719 97.8826 28.0084L96.7564 28.5797L102.371 39.4827L103.905 38.6993C104.819 38.2096 105.978 37.7037 107.186 37.165C107.872 36.8549 108.59 36.5448 109.308 36.202C110.695 35.5328 112.099 34.9942 113.356 34.5046C113.878 34.3087 117.24 32.9703 117.306 32.9377L112.491 19.57L120.129 16.9911L127.931 14.7713L130.575 24.9726L122.088 27.3882L120.586 22.5896L122.431 22.0183L123.361 25.0215L128.209 23.6342L126.528 17.187L120.668 18.8518L114.939 20.7778L119.101 32.3174L121.582 31.485C122.969 31.0117 124.683 30.4241 126.446 29.9671C130.151 28.8245 134.019 27.9758 134.77 27.8126L131.702 13.9552L134.786 13.2534L139.618 12.3883C141.348 12.0619 143.143 11.7518 144.498 11.6212L147.632 11.2295L148.954 21.6918L144.547 22.2468L140.222 22.9976L139.357 18.0194L141.266 17.693L141.805 20.7615L144.27 20.3371L146.799 20.0107L145.967 13.4003L144.743 13.5635C143.437 13.6941 141.691 14.0042 139.993 14.3143L134.019 15.4405L136.647 27.3882C137.088 27.2903 144.188 26.0008 144.188 26.0008C145.575 25.7886 146.946 25.6091 148.17 25.4622C148.856 25.3806 149.509 25.299 150.08 25.2174C151.533 25.0052 152.561 24.9399 152.757 24.9236L151.5 10.7888C151.5 10.7888 155.63 10.4787 156.168 10.4297C157.213 10.3481 158.404 10.2502 159.596 10.2338L167.643 10.0543V20.582L158.796 20.7941L158.568 15.767L160.494 15.6854L160.64 18.8192L165.684 18.7049V12.0293C165.357 12.0293 159.612 12.1762 159.612 12.1762C158.47 12.1762 157.327 12.2904 156.315 12.372C155.776 12.421 155.254 12.4536 154.797 12.4863L153.589 12.5842L154.667 24.793L159.139 24.4502L163.725 24.336C165.423 24.287 167.039 24.2381 168.344 24.3197L170.972 24.385L171.511 10.1849L174.677 10.2828L179.574 10.6582C180.961 10.7562 182.952 10.903 184.487 11.1316L187.621 11.5233L186.266 21.9693L181.875 21.4144C180.194 21.2348 178.48 21.1369 178.48 21.1369L177.501 21.0716L177.909 16.0118L179.835 16.175L179.59 19.2762C180.259 19.3252 181.19 19.4068 182.104 19.5047L184.601 19.8148L185.45 13.2044L184.226 13.0412C183.05 12.8617 181.402 12.6985 179.443 12.5679L173.388 12.1598L172.915 24.4013C173.388 24.4013 173.992 24.4339 174.694 24.4992L180.569 24.9399C181.973 25.0868 185.907 25.5928 186.478 25.6744C187.882 25.8376 188.877 26.0172 189.139 26.0661L191.473 12.0619C191.473 12.0619 195.488 12.7801 195.961 12.8617C197.038 13.0412 198.246 13.2534 199.454 13.5635C199.454 13.5635 205.526 14.9672 205.901 15.0651L207.272 15.5058L204.595 25.6744L203.616 25.3643C203.616 25.3643 203.224 25.2337 202.653 25.1031L196.026 23.5689L197.071 18.6396L198.964 19.0477L198.311 22.1162C198.311 22.1162 203.175 23.2424 203.224 23.2587L204.922 16.8116C204.595 16.73 204.204 16.632 203.747 16.5341L198.997 15.4405C197.838 15.1467 196.663 14.9509 195.635 14.7713C195.145 14.6897 193.056 14.3143 193.056 14.3143L191.032 26.4089C191.032 26.4089 194.819 27.0781 195.471 27.225L201.641 28.645C202.294 28.8082 202.914 28.9877 203.469 29.151L206.913 30.1303L206.374 31.991C206.374 31.991 201.788 30.6852 201.168 30.5383L195.031 29.1183C194.41 28.9877 193.807 28.8898 193.252 28.7919L188.779 27.9921C188.779 27.9921 187.751 27.7799 186.217 27.6167C185.629 27.5514 181.712 27.0454 180.357 26.8985L174.498 26.4578C173.812 26.3926 173.241 26.3762 172.8 26.3762L170.923 26.3273L168.23 26.262C166.973 26.1967 165.406 26.2293 163.742 26.2783L159.204 26.3926L152.871 26.8659C152.724 26.8659 151.729 26.9475 150.292 27.1434C149.705 27.225 149.052 27.3066 148.35 27.3882C147.142 27.5351 145.787 27.6983 144.449 27.9105L138.655 28.9388C137.904 29.0857 137.267 29.2163 136.827 29.3305L135.129 29.7386C134.411 29.9018 130.608 30.7342 126.919 31.8604C125.189 32.3174 123.508 32.8887 122.153 33.3457L117.942 34.7657C117.942 34.7657 114.498 36.1367 113.976 36.3489C112.752 36.8223 111.381 37.3609 110.059 37.9975C109.324 38.3402 108.606 38.6666 107.904 38.9768C106.713 39.4991 105.603 40.005 104.721 40.4621L101.457 42.1269C101.457 42.1269 100.478 42.6002 99.1394 43.3347L94.0306 46.2727C92.8881 46.9745 91.7456 47.709 90.701 48.3782C90.1134 48.7536 89.5584 49.1127 89.0688 49.4228C88.3832 49.8472 87.8446 50.2063 87.4692 50.4674L87.5835 50.4348ZM207.37 32.2195L206.44 31.9583L211.059 16.5341L211.957 16.7626C211.957 16.7626 212.854 16.9911 214.16 17.4481L218.763 18.9987C219.987 19.3741 221.162 19.8475 222.207 20.2718C222.615 20.4351 226.336 21.904 226.336 21.904L222.37 31.6645L218.257 30.0487C216.706 29.3958 215.074 28.8898 215.058 28.8898L214.095 28.596L215.792 23.7974L217.62 24.4339L216.592 27.3556C217.229 27.5841 218.11 27.8942 218.975 28.2533L221.293 29.1673L223.806 22.9976C223.806 22.9976 221.913 22.2468 221.505 22.0836C220.493 21.6755 219.35 21.2185 218.175 20.8594C218.175 20.8594 212.707 19.015 212.397 18.9171L208.839 30.6526C209.28 30.7832 209.851 30.979 210.504 31.2075C211.043 31.3871 211.646 31.5993 212.283 31.8114C213.475 32.2032 214.797 32.6439 216.102 33.1335L221.619 35.3043L224.084 36.3979L229.927 23.4546L232.832 24.7604C233.975 25.25 235.395 25.9845 236.896 26.7516C236.896 26.7516 238.349 27.5024 238.888 27.7636C239.883 28.2696 240.83 28.7592 241.597 29.1836L244.356 30.7668L239.165 39.9398L236.978 38.683C236.505 38.4055 235.933 38.0791 235.362 37.8016L231.396 35.7777L233.665 31.2728L235.395 32.1542L233.991 34.9452L236.227 36.0878C236.831 36.3816 237.435 36.7407 237.957 37.0345L238.447 37.3119L241.728 31.5176L240.651 30.8974C239.916 30.4894 239.002 30.016 238.023 29.5264C237.484 29.2489 236.031 28.4981 236.031 28.4981C234.562 27.7473 233.175 27.0291 232.065 26.5558L230.906 26.0335L225.863 37.214L227.43 37.9158C228.376 38.3402 229.486 38.9115 230.661 39.5317C231.331 39.8745 232.033 40.2499 232.734 40.5926C234.056 41.2292 235.33 41.98 236.456 42.6329C236.978 42.943 237.484 43.2368 237.941 43.4816L240.275 44.82L247.342 33.3457L247.571 33.2151C247.974 32.9975 250.286 34.2924 254.508 37.0997L261.102 41.8005L254.785 50.2389L247.604 45.1138L250.427 40.9517L252.027 42.0453L250.264 44.6405L254.377 47.5621L258.376 42.2248L253.431 38.6993C251.456 37.3935 249.448 36.1041 248.354 35.4023L241.924 45.8483L243.393 46.7786C244.878 47.709 246.641 48.8515 248.354 50.1083L249.562 50.9571C250.917 51.9201 252.19 52.8178 253.169 53.6339L255.242 55.2661L264.17 44.2324L265.541 45.3097C265.852 45.5545 266.243 45.8646 266.7 46.2563L270.373 49.4228C271.483 50.3531 272.56 51.3814 273.425 52.1975L276.298 54.9396L268.953 62.4967L265.754 59.4445C265.15 58.8569 264.529 58.2856 264.056 57.8776L262.473 56.5065L265.835 52.7198L267.288 54.0093L265.231 56.3433L265.313 56.4086C265.819 56.8166 266.472 57.4369 267.108 58.0571L268.92 59.7872L273.572 55.0049L272.103 53.6175C271.27 52.8178 270.226 51.8221 269.132 50.9081C269.132 50.9081 264.774 47.1377 264.513 46.9419L256.809 56.4739C257.168 56.7677 257.625 57.1594 258.148 57.6164C258.572 57.9918 261.575 60.587 262.604 61.501L266.896 65.5978C267.957 66.6588 268.496 67.1974 268.773 67.5238L279.023 57.7143L281.211 60.0157C282.173 60.9787 283.349 62.3498 284.491 63.6718L285.683 65.0592C286.417 65.908 287.119 66.7077 287.674 67.3932L289.649 69.8905L281.406 76.4519L279.839 74.4443C279.497 74.0199 279.105 73.514 278.681 73.0243L275.759 69.662L279.562 66.3323L280.835 67.785L278.485 69.8415L280.117 71.7349C280.574 72.2409 280.998 72.7795 281.357 73.2365L281.716 73.6935L286.94 69.5477L286.172 68.5684C285.65 67.9155 284.965 67.1321 284.246 66.2997L283.039 64.9123C281.929 63.6229 280.77 62.2682 279.839 61.3541L278.974 60.4401L270.112 68.9112L271.303 70.1516C272.021 70.8861 272.837 71.8491 273.702 72.8611C274.192 73.4324 274.698 74.0363 275.22 74.6239C276.216 75.7174 277.114 76.8763 277.897 77.8882C278.273 78.3779 278.632 78.8349 278.958 79.243L280.623 81.3648L291.542 73.3671C292.065 73.2038 293.784 75.255 296.7 79.5204L301.042 86.343L292.032 91.7945L287.282 84.3517L291.461 81.5443L292.538 83.1439L289.926 84.8904L292.636 89.1341L298.349 85.6738C298.169 85.3963 295.068 80.5487 295.068 80.5487C293.729 78.5901 292.342 76.6478 291.591 75.6032L281.716 82.8828L282.728 84.3028C283.594 85.4943 284.899 87.3223 286.074 89.2483L286.809 90.3908C287.723 91.8272 288.604 93.1656 289.225 94.3244L290.547 96.6258L288.865 97.5888L287.527 95.2548C286.923 94.1449 286.074 92.8228 285.177 91.4354L284.426 90.2766C283.267 88.3832 281.994 86.6042 281.145 85.429L279.056 82.4747C278.925 82.3115 276.722 79.5041 276.33 79.0145C275.563 78.0188 274.682 76.8926 273.735 75.848C273.196 75.2441 272.69 74.6402 272.184 74.0526C271.336 73.0733 270.552 72.1429 269.85 71.4248L267.321 68.7806C267.321 68.7806 266.57 67.9645 265.492 66.8873L261.232 62.8231C260.237 61.9254 257.25 59.3465 256.809 58.9711C255.65 57.9428 254.802 57.3226 254.802 57.3226L253.969 56.7187V56.6861L251.929 55.0539C250.982 54.2704 249.742 53.389 248.42 52.4587L247.196 51.5936C245.531 50.3531 243.801 49.2596 242.348 48.3292L239.328 46.3869C239.231 46.338 236.048 44.5099 235.509 44.1998C234.416 43.5632 233.191 42.8451 231.918 42.2248C231.2 41.8657 230.482 41.4903 229.813 41.1476C228.67 40.56 227.593 39.9887 226.663 39.5807L223.333 38.0791L220.917 37.0018L215.466 34.8473C214.193 34.374 212.887 33.9333 211.728 33.5416C211.075 33.3294 210.455 33.1172 209.916 32.9213C208.562 32.4317 207.599 32.1705 207.435 32.1379L207.37 32.2195ZM166.5 5.10876C77.5128 5.10876 5.10876 77.5128 5.10876 166.5C5.10876 255.487 77.5128 327.891 166.5 327.891C255.487 327.891 327.891 255.487 327.891 166.5C327.891 77.5128 255.503 5.10876 166.5 5.10876ZM166.5 325.116C79.0471 325.116 7.88349 253.969 7.88349 166.5C7.88349 79.0308 79.0471 7.88349 166.5 7.88349C253.953 7.88349 325.116 79.0308 325.116 166.5C325.116 253.969 253.969 325.116 166.5 325.116ZM166.5 0C74.6891 0 0 74.6891 0 166.5C0 258.311 74.6891 333 166.5 333C258.311 333 333 258.311 333 166.5C333 74.6891 258.311 0 166.5 0ZM166.5 329.295C76.7294 329.295 3.70508 256.271 3.70508 166.5C3.70508 76.7294 76.7457 3.70508 166.5 3.70508C256.254 3.70508 329.295 76.7294 329.295 166.5C329.295 256.271 256.271 329.295 166.5 329.295Z"
        fill="#FFB830"
      />
    </svg>
  );
}
