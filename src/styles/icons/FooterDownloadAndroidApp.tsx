export function DownloadAppAndroid(props: React.SVGProps<SVGSVGElement> & { isMobile?: boolean }) {
  const { isMobile = false, ...rest } = props;

  return isMobile ? (
    <svg xmlns="http://www.w3.org/2000/svg" width={145} height={59} fill="none" {...rest}>
      <rect width={143.403} height={56.681} x={1.162} y={1.277} stroke="#fff" strokeWidth={0.819} rx={2.049} />
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          d="M33.602 29.054 22.298 17.718l14.383 8.258-3.079 3.078ZM19.346 17.052c-.666.349-1.112.984-1.112 1.81v22.603c0 .826.446 1.46 1.112 1.81L32.493 30.16 19.346 17.052Zm21.782 11.556-3.017-1.746-3.366 3.304 3.366 3.304 3.078-1.746c.922-.733.922-2.383-.061-3.116Zm-18.83 14.006 14.383-8.258-3.079-3.078-11.304 11.336Z"
        />
      </g>
      <path
        fill="#fff"
        d="M61.75 18.472a2.312 2.312 0 0 0-.278-.58 1.789 1.789 0 0 0-.407-.442 1.706 1.706 0 0 0-.531-.278 2.115 2.115 0 0 0-.653-.096c-.389 0-.742.1-1.06.3-.318.201-.57.497-.758.887-.188.391-.282.87-.282 1.438 0 .567.095 1.046.285 1.437.19.39.447.686.771.887.325.2.69.3 1.095.3.376 0 .706-.08.992-.24.288-.162.513-.39.673-.685.162-.296.243-.645.243-1.046l.243.05h-1.972v-.703h2.497v.704c0 .54-.115 1.01-.346 1.408a2.388 2.388 0 0 1-.947.929c-.401.217-.862.326-1.383.326-.58 0-1.09-.136-1.53-.41a2.76 2.76 0 0 1-1.024-1.165c-.243-.503-.365-1.1-.365-1.792 0-.519.07-.985.208-1.4.14-.415.34-.77.595-1.062.256-.292.56-.516.91-.672a2.81 2.81 0 0 1 1.155-.234c.346 0 .668.053.967.157a2.595 2.595 0 0 1 1.395 1.114c.158.26.267.55.327.868h-.82Zm4.177 4.609c-.474 0-.883-.105-1.226-.314a2.106 2.106 0 0 1-.79-.883c-.184-.38-.276-.822-.276-1.325 0-.504.092-.948.275-1.332.186-.386.444-.687.775-.903a2.08 2.08 0 0 1 1.165-.326c.256 0 .509.043.759.128s.477.224.681.416c.205.19.368.442.49.755.122.314.183.7.183 1.16v.32h-3.79v-.654h3.021c0-.277-.055-.525-.166-.742a1.254 1.254 0 0 0-.468-.516 1.308 1.308 0 0 0-.71-.189c-.301 0-.561.075-.781.225-.218.147-.385.339-.503.576-.117.236-.176.49-.176.761v.436c0 .371.064.686.192.944.13.256.31.451.541.586.23.132.499.198.804.198.198 0 .377-.027.537-.083a1.15 1.15 0 0 0 .42-.256c.117-.115.208-.258.272-.429l.73.205a1.62 1.62 0 0 1-.388.653c-.181.186-.405.33-.672.435a2.493 2.493 0 0 1-.9.154Zm5.323-5.02v.641h-2.548v-.64h2.548Zm-1.805-1.177h.755v4.686c0 .213.031.373.093.48a.48.48 0 0 0 .243.212c.1.034.206.05.317.05.083 0 .152-.004.205-.012l.128-.026.154.679a1.575 1.575 0 0 1-.563.09 1.52 1.52 0 0 1-.628-.138 1.246 1.246 0 0 1-.506-.42c-.132-.187-.198-.424-.198-.71v-4.891Zm5.477 6.095v-4.917h.755v4.916h-.756Zm.384-5.737a.537.537 0 0 1-.381-.15.483.483 0 0 1-.157-.362c0-.14.052-.261.157-.361.106-.1.233-.15.38-.15.148 0 .274.05.378.15.107.1.16.22.16.361s-.053.262-.16.362c-.104.1-.23.15-.377.15Zm3.893.82v.64H76.65v-.64h2.548Zm-1.806-1.178h.756v4.686c0 .213.03.373.093.48a.48.48 0 0 0 .243.212c.1.034.206.05.317.05a1.343 1.343 0 0 0 .333-.038l.153.679a1.575 1.575 0 0 1-.563.09 1.52 1.52 0 0 1-.627-.138 1.246 1.246 0 0 1-.506-.42c-.132-.187-.199-.424-.199-.71v-4.891Zm6.233 3.137v2.957h-.756v-4.916h.73v.768h.064c.115-.25.29-.45.525-.602.235-.153.538-.23.91-.23.332 0 .623.068.873.205.25.134.444.339.583.614.138.273.208.62.208 1.037v3.125h-.756v-3.073c0-.387-.1-.688-.3-.903-.201-.218-.476-.327-.826-.327-.242 0-.457.053-.647.157a1.121 1.121 0 0 0-.445.458 1.51 1.51 0 0 0-.163.73Zm6.514 3.06c-.443 0-.833-.106-1.168-.317a2.154 2.154 0 0 1-.78-.887c-.187-.38-.28-.823-.28-1.331 0-.512.093-.96.28-1.341.187-.382.447-.679.78-.89a2.144 2.144 0 0 1 1.169-.317c.443 0 .832.105 1.165.317.335.211.595.508.78.89.189.382.282.829.282 1.34 0 .509-.093.952-.281 1.332-.186.38-.446.676-.781.887a2.128 2.128 0 0 1-1.165.317Zm0-.679c.338 0 .615-.086.833-.259.217-.173.379-.4.483-.682.105-.281.157-.587.157-.915 0-.329-.052-.635-.157-.919a1.549 1.549 0 0 0-.483-.688c-.218-.175-.495-.263-.832-.263-.338 0-.615.088-.833.263a1.55 1.55 0 0 0-.483.688c-.105.284-.157.59-.157.919 0 .328.052.634.157.915.105.282.266.51.483.682.218.173.495.26.832.26Zm4.328.576-1.498-4.916h.794l1.063 3.764h.05l1.05-3.764h.807l1.038 3.751h.05l1.063-3.751h.794l-1.498 4.916h-.742l-1.076-3.777h-.077l-1.075 3.777h-.743ZM62.888 34.577a2.16 2.16 0 0 0-.282-.59 1.817 1.817 0 0 0-.423-.453 1.708 1.708 0 0 0-.563-.28 2.345 2.345 0 0 0-.692-.099c-.448 0-.847.113-1.198.339-.35.225-.626.556-.827.994-.198.434-.297.964-.297 1.589 0 .63.099 1.163.297 1.6.198.438.474.77.827.999.353.225.763.338 1.23.338.424 0 .79-.082 1.1-.245.313-.163.553-.393.722-.692.168-.302.252-.655.252-1.06l.342.053h-2.265v-1.18h3.386v1.001c0 .715-.152 1.332-.457 1.854a3.117 3.117 0 0 1-1.254 1.206c-.533.28-1.144.42-1.834.42-.768 0-1.443-.173-2.024-.518a3.58 3.58 0 0 1-1.357-1.479c-.323-.64-.485-1.401-.485-2.281 0-.674.095-1.275.285-1.805.193-.53.462-.98.807-1.348.345-.373.75-.655 1.214-.848.464-.195.97-.293 1.516-.293.461 0 .892.068 1.291.203.4.134.754.324 1.063.57a3.101 3.101 0 0 1 1.165 2.004h-1.54Zm5.735 5.802c-.612 0-1.141-.135-1.59-.404a2.738 2.738 0 0 1-1.042-1.128c-.245-.484-.367-1.049-.367-1.695 0-.646.122-1.213.367-1.699a2.733 2.733 0 0 1 1.043-1.132c.448-.27.977-.404 1.589-.404.61 0 1.14.135 1.588.404.449.269.795.646 1.04 1.132.246.486.37 1.053.37 1.699 0 .646-.123 1.211-.37 1.695-.245.483-.591.86-1.04 1.128-.448.27-.977.404-1.588.404Zm.008-1.182c.331 0 .608-.09.83-.273.224-.184.39-.432.498-.741.111-.31.167-.655.167-1.035 0-.383-.056-.73-.167-1.039a1.644 1.644 0 0 0-.497-.745c-.223-.185-.5-.277-.831-.277-.34 0-.622.092-.848.276-.222.185-.39.434-.5.746-.11.31-.164.656-.164 1.039 0 .38.055.725.163 1.035.112.31.279.556.501.741.226.182.508.273.848.273Zm6.971 1.182c-.61 0-1.14-.135-1.589-.404a2.738 2.738 0 0 1-1.042-1.128c-.245-.484-.367-1.049-.367-1.695 0-.646.122-1.213.367-1.699a2.733 2.733 0 0 1 1.042-1.132c.449-.27.978-.404 1.59-.404.61 0 1.14.135 1.588.404.448.269.795.646 1.039 1.132.247.486.37 1.053.37 1.699 0 .646-.123 1.211-.37 1.695-.244.483-.59.86-1.039 1.128-.448.27-.978.404-1.589.404Zm.008-1.182c.332 0 .609-.09.832-.273.222-.184.388-.432.497-.741a3.04 3.04 0 0 0 .167-1.035c0-.383-.056-.73-.167-1.039a1.644 1.644 0 0 0-.497-.745c-.223-.185-.5-.277-.831-.277-.34 0-.623.092-.848.276-.223.185-.39.434-.501.746-.109.31-.163.656-.163 1.039 0 .38.054.725.163 1.035.111.31.278.556.501.741.225.182.508.273.847.273Zm6.964 3.536c-.53 0-.985-.072-1.365-.216-.38-.14-.686-.331-.916-.57a1.974 1.974 0 0 1-.481-.794l1.328-.322c.06.122.147.243.26.362.115.123.268.223.461.302.195.081.441.122.737.122.419 0 .765-.102 1.04-.305.273-.201.41-.533.41-.994v-1.186h-.073a2.092 2.092 0 0 1-.334.468 1.71 1.71 0 0 1-.574.404c-.236.108-.534.163-.892.163-.481 0-.917-.113-1.308-.338-.389-.229-.698-.568-.929-1.019-.228-.454-.342-1.021-.342-1.703 0-.687.114-1.267.342-1.74.23-.475.542-.835.933-1.079.391-.247.827-.37 1.308-.37.366 0 .668.062.904.187.24.122.43.27.57.444.142.17.249.332.322.484h.082V34h1.454v6.36c0 .534-.127.977-.383 1.327-.255.35-.604.613-1.047.787a4.1 4.1 0 0 1-1.507.26Zm.012-3.723c.313 0 .579-.076.799-.228.22-.152.387-.371.5-.656.115-.285.172-.628.172-1.027 0-.394-.057-.739-.171-1.035a1.477 1.477 0 0 0-.497-.688c-.218-.166-.485-.249-.803-.249-.329 0-.603.086-.823.257-.22.171-.386.406-.497.705a2.854 2.854 0 0 0-.167 1.01c0 .383.056.718.167 1.006.114.286.281.508.501.668.223.158.496.237.82.237Zm5.911-7.097v8.343h-1.474v-8.343h1.474Zm4.287 8.466c-.627 0-1.169-.13-1.625-.392a2.65 2.65 0 0 1-1.047-1.116c-.245-.483-.367-1.052-.367-1.707 0-.644.122-1.208.367-1.695.247-.488.592-.869 1.035-1.14.442-.275.962-.412 1.56-.412.386 0 .75.063 1.092.188.345.122.649.312.912.57.266.258.475.587.628.986.152.396.228.869.228 1.418v.452h-5.13v-.994h3.716a1.586 1.586 0 0 0-.183-.754 1.332 1.332 0 0 0-.501-.525 1.408 1.408 0 0 0-.742-.192c-.301 0-.566.073-.794.22a1.517 1.517 0 0 0-.534.57c-.125.234-.189.49-.191.77v.868c0 .364.066.676.2.937.132.258.318.457.557.595.24.136.52.204.84.204.214 0 .408-.03.582-.09.174-.062.325-.153.452-.273.128-.12.225-.267.29-.444l1.377.155a2.147 2.147 0 0 1-.497.953 2.424 2.424 0 0 1-.93.628 3.56 3.56 0 0 1-1.295.22Zm6.941-.123v-8.343h3.129c.641 0 1.179.12 1.613.358.438.24.768.568.99.986.226.416.338.888.338 1.418 0 .535-.112 1.01-.338 1.426a2.413 2.413 0 0 1-.998.982c-.44.236-.982.354-1.625.354h-2.074v-1.242h1.87c.375 0 .682-.066.921-.196s.415-.31.529-.538a1.7 1.7 0 0 0 .176-.786c0-.296-.059-.557-.176-.782a1.192 1.192 0 0 0-.533-.526c-.239-.127-.548-.191-.925-.191h-1.385v7.08h-1.512Zm8.793-8.343v8.343h-1.475v-8.343h1.475Zm3.317 8.47c-.396 0-.754-.071-1.071-.212a1.752 1.752 0 0 1-.75-.636c-.182-.28-.273-.624-.273-1.034 0-.354.065-.646.196-.876.13-.231.308-.416.533-.554.226-.139.48-.244.762-.314a6.2 6.2 0 0 1 .884-.16c.367-.037.664-.071.892-.1.229-.033.394-.082.497-.148.106-.067.159-.172.159-.313v-.025c0-.307-.091-.544-.273-.713-.182-.168-.444-.252-.786-.252-.361 0-.648.078-.86.236a1.17 1.17 0 0 0-.423.558l-1.377-.195c.108-.38.288-.698.538-.954.249-.258.555-.45.916-.578.361-.13.761-.196 1.198-.196.301 0 .602.036.9.106.299.07.572.188.819.35.247.16.446.38.595.657.152.276.228.623.228 1.038v4.188h-1.418v-.86h-.049a1.783 1.783 0 0 1-.985.852c-.242.09-.526.135-.852.135Zm.383-1.084c.296 0 .553-.058.77-.175.217-.12.384-.277.501-.473.12-.195.179-.409.179-.64v-.737a.694.694 0 0 1-.236.106 3.37 3.37 0 0 1-.367.086c-.135.024-.27.046-.403.065l-.346.049c-.22.03-.417.078-.591.146a.975.975 0 0 0-.411.286.695.695 0 0 0-.151.464c0 .272.099.477.297.615.199.139.451.208.758.208Zm5.097 3.304c-.201 0-.387-.016-.559-.049a2.077 2.077 0 0 1-.403-.106l.342-1.149c.215.063.406.093.575.09a.706.706 0 0 0 .444-.159c.13-.1.24-.269.33-.505l.126-.338-2.269-6.388h1.564l1.443 4.725h.065L120.419 34h1.568l-2.505 7.015a2.832 2.832 0 0 1-.464.852c-.193.239-.43.42-.709.545-.277.128-.609.192-.994.192Z"
      />
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M17.142 16.506h26.222v26.222H17.142z" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width={176} height={69} fill="none" {...rest}>
      <rect width={175} height={68} x={0.5} y={0.5} fill="#161042" rx={2.5} />
      <rect width={175} height={68} x={0.5} y={0.5} stroke="#fff" rx={2.5} />
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          d="M40.087 33.813 26.292 19.979l17.552 10.077-3.757 3.757ZM22.69 19.166c-.813.426-1.357 1.2-1.357 2.209v27.584c0 1.008.544 1.782 1.357 2.207l16.043-16.003L22.69 19.167ZM49.27 33.27l-3.68-2.131-4.108 4.032 4.107 4.032 3.757-2.131c1.125-.895 1.125-2.908-.075-3.802ZM26.293 50.36l17.552-10.077-3.757-3.757L26.292 50.36Z"
        />
      </g>
      <path
        fill="#fff"
        d="M74.438 21.5a2.822 2.822 0 0 0-.34-.707 2.182 2.182 0 0 0-.496-.54 2.083 2.083 0 0 0-.649-.339 2.582 2.582 0 0 0-.797-.117c-.474 0-.905.122-1.293.367-.388.245-.696.605-.925 1.082-.23.477-.344 1.061-.344 1.754 0 .693.116 1.277.347 1.754.232.476.546.837.942 1.082.396.245.841.367 1.336.367.458 0 .862-.098 1.21-.293.352-.198.626-.476.821-.836.198-.362.297-.788.297-1.277l.297.062h-2.406V23h3.046v.86c0 .658-.14 1.231-.421 1.718a2.914 2.914 0 0 1-1.157 1.133c-.49.266-1.052.398-1.687.398-.709 0-1.331-.166-1.867-.5-.534-.333-.951-.807-1.25-1.422-.297-.614-.446-1.343-.446-2.187 0-.633.085-1.202.254-1.707a3.78 3.78 0 0 1 .727-1.297c.312-.357.682-.63 1.11-.82.426-.19.896-.285 1.41-.285.421 0 .814.063 1.179.191a3.166 3.166 0 0 1 1.703 1.36c.193.317.326.67.398 1.058h-1Zm5.096 5.625c-.578 0-1.077-.128-1.496-.383a2.57 2.57 0 0 1-.965-1.078c-.224-.463-.336-1.003-.336-1.617 0-.615.112-1.156.336-1.625a2.65 2.65 0 0 1 .946-1.102c.406-.265.88-.398 1.421-.398.313 0 .621.052.926.156.305.104.582.274.832.508.25.232.45.539.598.922.148.383.223.854.223 1.414v.39h-4.625v-.796h3.687c0-.339-.068-.641-.203-.907a1.53 1.53 0 0 0-.57-.629 1.597 1.597 0 0 0-.868-.23c-.367 0-.684.091-.953.273a1.8 1.8 0 0 0-.613.704 2.065 2.065 0 0 0-.215.93v.53c0 .454.078.838.235 1.153.158.312.378.55.66.715.281.161.608.242.98.242.242 0 .461-.034.656-.102.198-.07.369-.174.512-.312.143-.14.254-.315.332-.524l.89.25a1.973 1.973 0 0 1-.472.797 2.302 2.302 0 0 1-.82.532 3.042 3.042 0 0 1-1.098.187ZM86.03 21v.781h-3.11V21h3.11Zm-2.203-1.438h.922v5.72c0 .26.038.455.113.585a.587.587 0 0 0 .297.258c.123.042.251.063.387.063.101 0 .185-.006.25-.016l.156-.031.188.828c-.063.023-.15.047-.262.07a1.93 1.93 0 0 1-.426.04c-.26 0-.516-.057-.766-.169a1.521 1.521 0 0 1-.617-.512c-.161-.229-.242-.518-.242-.867v-5.968ZM90.511 27v-6h.922v6h-.922Zm.469-7a.656.656 0 0 1-.465-.184.59.59 0 0 1-.192-.441.59.59 0 0 1 .192-.441.656.656 0 0 1 .465-.184c.18 0 .333.061.46.184.13.122.196.27.196.441a.584.584 0 0 1-.196.441.642.642 0 0 1-.46.184Zm4.75 1v.781h-3.109V21h3.11Zm-2.203-1.438h.922v5.72c0 .26.038.455.114.585a.587.587 0 0 0 .296.258c.123.042.252.063.387.063.102 0 .185-.006.25-.016l.156-.031.188.828c-.063.023-.15.047-.262.07a1.93 1.93 0 0 1-.426.04c-.26 0-.515-.057-.765-.169a1.521 1.521 0 0 1-.618-.512c-.16-.229-.242-.518-.242-.867v-5.968Zm7.606 3.829V27h-.922v-6h.891v.938h.078c.14-.305.354-.55.64-.735.287-.187.657-.281 1.11-.281.406 0 .761.083 1.066.25.305.164.542.414.711.75.169.333.254.755.254 1.265V27h-.922v-3.75c0-.471-.122-.838-.367-1.102-.245-.265-.581-.398-1.008-.398a1.61 1.61 0 0 0-.789.191c-.229.128-.41.314-.543.559-.133.245-.199.542-.199.89Zm7.95 3.734c-.542 0-1.017-.129-1.426-.387a2.627 2.627 0 0 1-.953-1.082c-.226-.463-.34-1.005-.34-1.625 0-.625.114-1.17.34-1.636.229-.467.547-.829.953-1.086.409-.258.884-.387 1.426-.387.542 0 1.016.129 1.422.387.409.257.726.62.953 1.085.229.467.344 1.012.344 1.637 0 .62-.115 1.162-.344 1.625a2.593 2.593 0 0 1-.953 1.082c-.406.258-.88.387-1.422.387Zm0-.828c.411 0 .75-.106 1.016-.317.265-.21.462-.488.589-.832.128-.343.192-.716.192-1.117 0-.4-.064-.774-.192-1.12a1.888 1.888 0 0 0-.589-.84c-.266-.214-.605-.321-1.016-.321-.411 0-.75.107-1.016.32a1.888 1.888 0 0 0-.589.84c-.128.346-.192.72-.192 1.121s.064.774.192 1.117c.127.344.324.622.589.832.266.211.605.317 1.016.317Zm5.281.703-1.828-6h.969l1.297 4.594h.062L116.146 21h.984l1.266 4.578h.062L119.755 21h.969l-1.828 6h-.907l-1.312-4.61h-.094L115.271 27h-.907ZM75.825 41.07a2.633 2.633 0 0 0-.343-.721 2.216 2.216 0 0 0-.517-.552 2.086 2.086 0 0 0-.686-.343c-.258-.08-.54-.12-.845-.12-.547 0-1.034.138-1.462.413-.427.275-.764.68-1.009 1.213-.242.53-.363 1.177-.363 1.94 0 .768.121 1.42.363 1.953.242.534.578.94 1.01 1.218.43.275.93.413 1.5.413.518 0 .965-.1 1.343-.299.381-.199.674-.48.88-.845.206-.368.308-.799.308-1.292l.418.064h-2.764V42.67h4.131v1.224c0 .871-.186 1.625-.557 2.262a3.804 3.804 0 0 1-1.531 1.471c-.65.341-1.395.512-2.237.512-.938 0-1.762-.21-2.471-.631-.706-.424-1.258-1.026-1.656-1.805-.394-.782-.591-1.71-.591-2.784 0-.822.116-1.556.348-2.202a4.765 4.765 0 0 1 .984-1.646 4.191 4.191 0 0 1 1.482-1.034 4.718 4.718 0 0 1 1.85-.358c.563 0 1.088.083 1.575.249.487.162.92.394 1.298.696a3.783 3.783 0 0 1 1.422 2.446h-1.88Zm6.999 7.08c-.746 0-1.392-.165-1.939-.493a3.342 3.342 0 0 1-1.273-1.377c-.298-.59-.447-1.28-.447-2.068 0-.79.15-1.48.447-2.074a3.335 3.335 0 0 1 1.273-1.382c.547-.328 1.193-.492 1.939-.492s1.392.164 1.939.492c.547.328.97.79 1.268 1.383.301.593.452 1.284.452 2.073 0 .788-.15 1.478-.452 2.068a3.31 3.31 0 0 1-1.268 1.377c-.547.328-1.193.492-1.939.492Zm.01-1.443c.404 0 .742-.11 1.014-.333.272-.225.474-.527.607-.905a3.71 3.71 0 0 0 .204-1.262c0-.468-.068-.89-.204-1.268a2.007 2.007 0 0 0-.607-.91c-.272-.225-.61-.338-1.014-.338-.414 0-.759.113-1.034.338a2.041 2.041 0 0 0-.612.91 3.81 3.81 0 0 0-.198 1.268c0 .464.066.885.198 1.262.136.378.34.68.612.905.275.222.62.333 1.034.333Zm8.508 1.442c-.746 0-1.392-.164-1.94-.492a3.342 3.342 0 0 1-1.272-1.377c-.298-.59-.447-1.28-.447-2.068 0-.79.149-1.48.447-2.074a3.335 3.335 0 0 1 1.273-1.382c.547-.328 1.193-.492 1.939-.492.745 0 1.392.164 1.939.492.546.328.969.79 1.267 1.383.302.593.453 1.284.453 2.073 0 .788-.151 1.478-.453 2.068a3.31 3.31 0 0 1-1.267 1.377c-.547.328-1.194.492-1.94.492Zm.01-1.442c.404 0 .742-.11 1.014-.333.272-.225.474-.527.606-.905a3.71 3.71 0 0 0 .204-1.262c0-.468-.068-.89-.204-1.268a2.007 2.007 0 0 0-.606-.91c-.272-.225-.61-.338-1.014-.338-.415 0-.76.113-1.035.338a2.041 2.041 0 0 0-.611.91 3.81 3.81 0 0 0-.199 1.268c0 .464.066.885.199 1.262.136.378.34.68.611.905.276.222.62.333 1.035.333Zm8.497 4.316c-.646 0-1.201-.088-1.665-.264-.464-.172-.837-.404-1.119-.696a2.41 2.41 0 0 1-.587-.97l1.621-.392c.073.15.18.297.318.443.14.149.327.271.562.367.239.1.539.15.9.15.511 0 .933-.125 1.268-.373.335-.246.502-.65.502-1.213v-1.447h-.09a2.525 2.525 0 0 1-.407.572c-.176.195-.41.36-.701.492-.289.132-.651.199-1.089.199a3.137 3.137 0 0 1-1.596-.413c-.474-.278-.852-.693-1.133-1.243-.279-.553-.418-1.246-.418-2.078 0-.839.14-1.546.418-2.123.281-.58.66-1.02 1.138-1.317a2.926 2.926 0 0 1 1.596-.453c.447 0 .815.076 1.104.229.291.149.523.33.696.542.172.209.303.406.392.591h.1v-1.262h1.775v7.76c0 .653-.156 1.194-.468 1.621-.311.428-.737.747-1.277.96-.541.212-1.154.318-1.84.318Zm.015-4.544c.381 0 .706-.093.975-.279.268-.185.472-.452.611-.8.139-.348.209-.766.209-1.253 0-.48-.07-.901-.209-1.263-.136-.361-.338-.641-.606-.84-.266-.202-.592-.303-.98-.303-.4 0-.736.104-1.004.313-.269.209-.47.495-.607.86a3.484 3.484 0 0 0-.204 1.233c0 .467.069.877.204 1.228.14.348.343.62.612.815.272.193.605.289 1 .289Zm7.214-8.66V48h-1.8V37.818h1.8Zm5.231 10.33c-.765 0-1.427-.159-1.983-.477a3.228 3.228 0 0 1-1.278-1.362c-.298-.59-.448-1.285-.448-2.083 0-.786.15-1.475.448-2.069a3.382 3.382 0 0 1 1.263-1.392c.54-.334 1.175-.502 1.904-.502.47 0 .915.076 1.332.229.421.149.792.381 1.114.696.325.315.58.716.765 1.203.186.484.279 1.06.279 1.73v.552h-6.259v-1.213h4.534a1.942 1.942 0 0 0-.224-.92 1.632 1.632 0 0 0-.611-.641 1.722 1.722 0 0 0-.905-.234c-.368 0-.691.09-.97.269a1.853 1.853 0 0 0-.651.696c-.152.285-.23.598-.234.94v1.058c0 .444.082.826.244 1.144.162.315.389.556.681.726.292.165.633.248 1.024.248.262 0 .499-.036.711-.11.212-.075.396-.187.552-.332a1.39 1.39 0 0 0 .353-.542l1.68.189a2.622 2.622 0 0 1-.606 1.163 2.957 2.957 0 0 1-1.134.766c-.46.179-.987.268-1.581.268ZM120.78 48V37.818h3.818c.782 0 1.438.146 1.969.438a2.92 2.92 0 0 1 1.208 1.203c.275.507.412 1.084.412 1.73 0 .653-.137 1.233-.412 1.74a2.947 2.947 0 0 1-1.218 1.198c-.537.288-1.199.433-1.984.433h-2.531v-1.517h2.282c.458 0 .832-.08 1.124-.238.292-.16.507-.378.646-.657a2.07 2.07 0 0 0 .214-.96c0-.36-.071-.678-.214-.954a1.45 1.45 0 0 0-.651-.641c-.292-.156-.668-.234-1.129-.234h-1.69V48h-1.844Zm10.73-10.182V48h-1.8V37.818h1.8Zm4.048 10.336a3.19 3.19 0 0 1-1.308-.258 2.141 2.141 0 0 1-.915-.776c-.222-.341-.333-.762-.333-1.263 0-.43.08-.787.239-1.069.159-.281.376-.507.651-.676.275-.169.585-.296.93-.383a7.57 7.57 0 0 1 1.079-.194c.447-.046.81-.087 1.089-.124.278-.04.48-.1.606-.179.129-.083.194-.21.194-.383v-.03c0-.374-.111-.664-.333-.87-.222-.205-.542-.308-.96-.308-.44 0-.79.096-1.049.289-.255.192-.427.419-.517.68l-1.68-.238c.132-.464.351-.852.656-1.163.305-.315.678-.55 1.119-.706a4.28 4.28 0 0 1 1.461-.239c.368 0 .735.043 1.099.13.365.086.698.228.999.427.302.196.544.462.726.8.186.338.279.761.279 1.268V48h-1.73v-1.049h-.06a2.206 2.206 0 0 1-.462.597c-.196.182-.443.33-.741.442a2.99 2.99 0 0 1-1.039.164Zm.467-1.322c.361 0 .675-.072.94-.214.265-.146.469-.338.611-.577.146-.238.219-.499.219-.78v-.9a.85.85 0 0 1-.288.13c-.133.039-.282.074-.448.103-.166.03-.33.057-.492.08l-.423.06a3.162 3.162 0 0 0-.721.179 1.2 1.2 0 0 0-.502.348.854.854 0 0 0-.184.566c0 .332.121.582.363.751.242.17.551.254.925.254Zm6.219 4.032c-.245 0-.472-.02-.681-.06a2.54 2.54 0 0 1-.492-.13l.418-1.401c.262.076.495.112.701.11a.861.861 0 0 0 .542-.195c.159-.122.293-.328.402-.616l.155-.413-2.77-7.795h1.909l1.76 5.767h.08l1.765-5.767h1.914l-3.058 8.56c-.142.405-.331.751-.566 1.04a2.313 2.313 0 0 1-.865.666c-.339.156-.743.234-1.214.234Z"
      />
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M20 18.5h32v32H20z" />
        </clipPath>
      </defs>
    </svg>
  );
}