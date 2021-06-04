import React, { Component } from "react";

export class CurrentChatIcon extends Component {
    render(){
        return (
            <svg width="45" height="45" viewBox="0 0 60 60">
                <path d="M8.86748 7.67204C7.27019 8.10308 6.0164 9.1548 5.17481 10.741L4.77979 11.4651V22.4996V33.5341L5.17481 34.2755C5.8103 35.4824 6.82363 36.4651 8.00872 36.9996C9.05641 37.4824 9.15946 37.4996 12.4571 37.5514L15.8578 37.6203L15.8921 41.2755L15.9437 44.9307L20.8214 41.2755L25.6992 37.6031L31.6418 37.5514L37.5844 37.4996L38.6493 36.9996C39.8344 36.4651 40.8477 35.4824 41.4832 34.2755L41.8782 33.5341V22.4996V11.4651L41.4832 10.741C40.6244 9.12032 39.3878 8.10308 37.7218 7.67204C36.2963 7.29273 10.2415 7.30997 8.86748 7.67204ZM37.6875 11.8617L38.1855 12.4134V22.4996V32.5858L37.6875 33.1376L37.1894 33.7065L30.8002 33.7583L24.411 33.81L22.0237 35.6203L19.6363 37.4307V35.6203V33.81L14.5525 33.7583L9.46861 33.7065L8.97053 33.1376L8.47245 32.5858V22.5169V12.4479L8.90183 11.9134C9.14229 11.6376 9.52014 11.3617 9.72624 11.3272C9.93234 11.2755 16.2013 11.2583 23.6382 11.2755L37.1894 11.2927L37.6875 11.8617Z" fill="white" />
                <path d="M45.7426 25.7236C45.7426 31.0339 45.6739 32.9477 45.5022 33.8098C44.8495 36.896 42.5824 39.5167 39.5768 40.6719C38.4604 41.1029 38.323 41.1029 32.6895 41.2064L26.9358 41.2926L23.7584 43.6891C22.0066 45.0167 20.5467 46.1201 20.5123 46.1546C20.3234 46.3098 22.0581 47.827 22.8997 48.2408L23.8443 48.7064L29.8384 48.7581L35.8326 48.8098L40.7447 52.4995L45.6568 56.1719L45.7083 52.4995L45.7426 48.827L49.2292 48.7581C52.544 48.7064 52.7329 48.6891 53.6432 48.2581C54.8111 47.7064 55.7386 46.8098 56.3569 45.6374L56.8206 44.7408V33.7063V22.6719L56.3054 21.7408C55.6699 20.5684 54.5535 19.5857 53.3684 19.1374C52.544 18.827 52.0288 18.7925 49.0918 18.7925H45.7426V25.7236Z" fill="white" />
            </svg>
        )
    }
}

export class PendingChatIcon extends Component {
    render(){
        return (
            <svg width="45" height="45" viewBox="0 0 60 60">
                <path d="M23.1825 0.351795C22.1435 0.515858 20.8594 0.890858 19.9955 1.2893C17.4857 2.43773 15.2443 4.69945 14.1236 7.26586C13.715 8.1682 13.715 9.93773 14.1003 10.9221C14.7657 12.5862 16.6218 13.8284 18.4546 13.8284C19.8554 13.8284 21.4664 12.9495 22.1785 11.7893C22.949 10.5354 23.2875 10.137 23.8129 9.86742C24.7351 9.39867 26.0425 9.60961 26.6963 10.3245C27.5601 11.2737 27.5018 12.9377 26.5912 13.7932C26.4394 13.9455 25.8441 14.2385 25.2837 14.4612C23.9179 15.0002 22.914 15.6799 21.9917 16.676C21.0929 17.6487 20.2757 19.219 20.0189 20.4495C19.8204 21.4221 19.7854 25.887 19.9722 26.7073C20.299 28.1252 21.3614 29.4612 22.6688 30.1057C25.4939 31.4768 28.7509 30.094 29.7548 27.094C29.9533 26.5198 29.9999 26.0862 29.9999 24.8674V23.3674L30.5486 23.0979C32.6616 22.0666 34.8095 19.8518 35.9302 17.5666C37.0626 15.2346 37.3194 13.008 36.5606 12.0705C36.3621 11.8245 36.3505 11.8245 36.1754 12.0354C36.0703 12.1526 35.7434 12.8791 35.4516 13.6526C34.1208 17.0862 31.6459 19.6526 28.5874 20.7541C27.0348 21.3049 27.0815 21.2346 26.9998 23.8596C26.9297 26.2151 26.8831 26.426 26.2994 26.9768C25.6223 27.6096 24.56 27.633 23.8362 27.012C23.2525 26.5198 23.2058 26.262 23.2525 23.5901C23.2992 21.3752 23.3226 21.094 23.5677 20.508C24.1747 19.0432 25.1086 18.1877 26.9764 17.4026C28.961 16.5705 30.1284 15.094 30.4669 12.9612C30.8755 10.3479 28.9843 7.55883 26.3227 6.8557C23.9529 6.24633 21.4431 7.33617 20.2057 9.52758C19.7387 10.3596 19.2834 10.6643 18.5246 10.6643C18.0577 10.6643 17.9059 10.6057 17.5557 10.2776C17.1938 9.94945 17.1238 9.78539 17.0771 9.2932C17.0187 8.77758 17.0654 8.59008 17.404 7.96898C17.8826 7.06664 19.0733 5.75414 19.9955 5.13305C21.5481 4.06664 22.9957 3.63305 24.9452 3.63305C27.0582 3.63305 28.7975 4.21898 30.4902 5.50805C31.7627 6.4807 32.4631 7.42992 33.5838 9.70336C34.7979 12.1643 35.1131 12.4221 35.6034 11.344C35.8952 10.7112 35.9185 9.14086 35.6617 8.15648C35.1831 6.31664 33.4787 3.94945 31.6343 2.55492C30.4669 1.6643 28.6224 0.855701 27.0231 0.515858C25.9842 0.293201 24.0813 0.21117 23.1825 0.351795Z" fill="white" />
                <path d="M42.596 17.5781C40.6698 17.9062 40.0394 18.1992 40.2846 18.6562C40.4597 18.9727 41.2302 19.3008 42.3275 19.5117C42.8411 19.6055 43.5416 19.7461 43.8918 19.8164C45.3043 20.0977 46.53 21.0703 47.1371 22.3594C47.4406 23.0156 47.4523 23.0742 47.4523 25.3711C47.4523 26.6602 47.4056 31.4531 47.3472 36.0352C47.2538 43.7695 47.2305 44.4023 47.0203 44.9531C46.7052 45.8203 46.0164 46.5586 45.0825 47.0156L44.3004 47.4023L35.8952 47.4844C31.2724 47.5312 26.6029 47.5898 25.5289 47.6016L23.5561 47.6367L21.2563 49.9805C18.8632 52.418 14.5789 56.4023 14.2871 56.4609C13.7968 56.5781 13.7851 56.4258 13.8435 52.2891C13.9369 46.8047 14.2638 47.1914 9.45416 47.1094C6.36061 47.0508 6.09211 47.0273 5.59014 46.8047C4.88972 46.4766 4.13092 45.7148 3.80405 45.0117C3.55891 44.4727 3.55891 44.4727 3.55891 33.9258V23.3789L3.94414 22.582C4.22431 22.0312 4.49281 21.6797 4.86637 21.3867C5.76525 20.6953 6.20885 20.625 9.45416 20.625C12.3026 20.625 13.2014 20.543 14.2754 20.2031C15.5479 19.7812 14.6023 19.3359 11.4971 18.8789C7.42292 18.2812 5.83529 18.2344 4.55118 18.6914C2.85848 19.2891 1.45763 20.9062 0.885613 22.8984C0.605443 23.8594 0.488705 27.1055 0.395315 36.6797L0.313599 44.707L0.582095 45.6328C1.2475 47.8828 3.08028 49.6172 5.42671 50.2148C5.91701 50.3438 6.73417 50.3906 8.31013 50.3906H10.5048V53.5547C10.5048 56.4258 10.5281 56.7656 10.7383 57.3398C11.0651 58.2305 11.6605 58.8633 12.5594 59.3086C13.2131 59.6367 13.4466 59.6836 14.182 59.6836C14.9175 59.6836 15.151 59.6367 15.8047 59.3086C16.4818 58.9805 17.0304 58.4648 20.6843 54.7148L24.8052 50.4961L34.903 50.5312C44.5105 50.5664 45.0358 50.5547 45.6428 50.3438C47.9659 49.5586 49.6586 47.7891 50.3941 45.4102C50.5925 44.7539 50.6042 44.168 50.5692 35.625C50.5341 24.9258 50.4524 22.875 50.0789 21.8555C49.2851 19.7578 47.5807 18.1641 45.5845 17.6367C44.8607 17.4492 43.5065 17.4258 42.596 17.5781Z" fill="white" />
                <path d="M25.459 32.6719C24.6302 33.082 24.7352 34.1836 25.6925 35.2148C26.4396 36.0117 26.6614 36.4922 26.6614 37.2656C26.6731 38.0156 26.4162 38.5078 25.7975 38.9648C25.2138 39.3984 24.8753 39.3516 24.1749 38.7187C23.5211 38.1211 23.276 37.5234 23.4044 36.8203C23.4978 36.3398 24.0348 35.7422 24.385 35.7422C24.6768 35.7422 24.8636 35.4141 24.8636 34.8984C24.8636 33.3516 22.2954 33.1992 21.128 34.6758C20.4626 35.5312 20.2642 36.1523 20.2642 37.4414C20.2642 38.4023 20.3109 38.7422 20.5327 39.293C20.9062 40.2422 21.8751 41.2617 22.8557 41.7422C23.5795 42.1055 23.7196 42.1289 24.8169 42.1289C25.9726 42.1289 26.0077 42.1172 27.0233 41.6133C28.2957 40.9805 29.0545 40.2539 29.5682 39.1641C29.9184 38.4375 29.9417 38.2852 29.9417 37.1484C29.9417 36.0117 29.9184 35.8594 29.5798 35.1562C28.9728 33.8672 28.249 33.1992 26.9299 32.707C26.1127 32.4023 25.9726 32.4023 25.459 32.6719Z" fill="white" />
            </svg>
        )
    }
}

export class CompaniesIcon extends Component {
    render(){
        return (
            <svg width="45" height="45" viewBox="0 0 60 60">
                <path d="M8.46297 5.37557V8.3623H5.48771H2.51245V31.7915V55.2207L9.69275 55.1942L16.8598 55.1543L16.8995 53.9862L16.9392 52.8313H10.9093H4.89266V31.7915V10.7517H7.86792H10.8432V7.76495V4.77822H22.8103H34.7775V6.57026V8.3623L24.0401 8.38884L13.2895 8.42867L13.2498 9.58353L13.2102 10.7517H26.9757H40.728V17.3888V24.026H41.9181H43.1082V16.1942V8.3623H40.133H37.1577V5.37557V2.38884H22.8103H8.46297V5.37557Z" fill="white" />
                <path d="M9.70598 14.5088C9.66631 14.615 9.65308 15.1593 9.67953 15.7434L9.7192 16.792L12.073 16.8318L14.4135 16.8584V15.5973V14.3363H12.0994C10.2746 14.3363 9.75887 14.3761 9.70598 14.5088Z" fill="white" />
                <path d="M20.4963 15.5973V16.8584L22.8501 16.8318L25.1906 16.792V15.5973V14.4027L22.8501 14.3628L20.4963 14.3363V15.5973Z" fill="white" />
                <path d="M31.2073 15.5973V16.8584H33.5875H35.9677V15.5973V14.3363H33.5875H31.2073V15.5973Z" fill="white" />
                <path d="M9.67956 21.5975L9.71923 22.7657L12.073 22.8055L14.4135 22.832V21.6373V20.4427H12.0333H9.63989L9.67956 21.5975Z" fill="white" />
                <path d="M20.4963 21.6373V22.832H22.8765H25.2568V21.6373V20.4427H22.8765H20.4963V21.6373Z" fill="white" />
                <path d="M31.2073 21.6373V22.832H33.5875H35.9677V21.6373V20.4427H33.5875H31.2073V21.6373Z" fill="white" />
                <path d="M32.3973 24.2254C29.0915 24.8891 26.7112 26.8272 25.7592 29.575C25.3757 30.7165 25.336 33.1856 25.693 34.4732C25.9178 35.2829 25.9178 35.2962 25.6269 35.8537C25.0054 37.0617 25.3625 38.8006 26.4468 39.7165C26.7509 39.9953 26.9757 40.3272 27.0418 40.6192C27.2005 41.3758 27.5708 42.1059 28.2187 42.9555L28.827 43.7785V45.0396C28.827 46.221 28.8005 46.3404 28.47 46.7254C27.9939 47.2962 27.4518 47.6281 25.5344 48.4909C23.3261 49.4997 22.1889 50.19 21.3029 51.1059C19.9673 52.4599 19.3062 54.2121 19.3062 56.3758V57.6104H38.4139H57.5217V56.8404C57.5217 55.7652 57.1912 54.3581 56.7283 53.4024C55.9217 51.7564 54.3613 50.4688 51.9018 49.3935C49.6274 48.398 48.9265 48.0396 48.4505 47.6281C48.0009 47.2298 48.0009 47.2165 48.0009 46.1015C48.0009 45.1325 48.0538 44.8537 48.3844 44.1502C48.5959 43.7121 48.8472 42.9555 48.9265 42.4776C49.0455 41.8537 49.2042 41.5086 49.4687 41.2165C50.3811 40.2342 50.7514 38.4422 50.2753 37.2077C50.0241 36.5573 50.0241 36.4511 50.2092 35.8803C50.5133 34.8581 50.5795 33.1192 50.3282 32.0838C49.8125 29.8803 48.5827 28.5396 46.6918 28.1148C46.0042 27.9688 45.9777 27.9422 45.6471 27.1723L45.3033 26.3758L44.0471 26.4555C42.7644 26.5219 41.376 26.8803 40.4371 27.3581L39.9346 27.6104L39.3925 27.0661C38.8106 26.482 37.7395 25.9378 36.9197 25.805C36.4437 25.7254 36.3775 25.659 35.9941 24.8758L35.5709 24.0263L34.4205 24.0396C33.7725 24.0396 32.8733 24.1325 32.3973 24.2254ZM34.4734 27.2387L34.8436 27.9422L35.7693 28.0219C36.8404 28.1015 37.3957 28.367 37.8982 28.9909C38.9825 30.3449 39.1677 33.2387 38.2817 34.7121L37.9776 35.2298L38.3478 35.7741C39.0751 36.8493 39.0222 37.4732 38.123 38.2962C37.5676 38.8139 37.528 38.8935 37.4222 39.8095C37.2767 40.9245 36.9594 41.7077 36.3775 42.3714L35.9676 42.8493V44.8139C35.9676 47.1634 36.0999 47.5617 37.2106 48.6369C37.9247 49.3404 38.0834 49.4201 41.8124 51.2387C43.9016 52.2475 44.9727 53.336 45.2901 54.7829L45.3827 55.221H33.6006H21.8186L21.8979 54.8493C22.3211 53.044 23.379 52.1015 26.6319 50.6281C29.2766 49.4466 30.2948 48.6767 30.9427 47.3891C31.1808 46.9378 31.2072 46.6059 31.2072 44.7741V42.6635L30.6254 42.1723C29.9113 41.575 29.2501 40.3139 29.1311 39.3183C29.0518 38.6413 29.0253 38.6015 28.4832 38.3493C27.5443 37.898 27.4518 37.0617 28.2584 36.2121L28.589 35.867L28.2452 35.0174C26.9493 31.7652 27.9542 28.7254 30.7576 27.3847C31.6568 26.9599 33.0056 26.575 33.7461 26.5617C34.037 26.5484 34.156 26.6679 34.4734 27.2387ZM44.1529 29.5882L44.457 30.2387L45.4356 30.2918C46.2819 30.3449 46.4934 30.4112 46.9166 30.7564C47.181 30.9688 47.5513 31.4334 47.7364 31.805C48.0273 32.3758 48.067 32.6148 48.0538 33.7829C48.0406 35.0573 48.0009 35.2696 47.4587 36.5971C47.3001 36.9953 47.3133 37.0484 47.6439 37.4068C48.3712 38.1635 48.2257 39.4511 47.353 40.0351C46.8637 40.3537 46.8372 40.4201 46.6918 41.3493C46.5331 42.4378 46.11 43.6988 45.819 43.9378C45.6604 44.0705 45.6207 44.4953 45.6207 45.982C45.6207 47.8272 45.6339 47.8803 46.0042 48.4643C46.5199 49.2873 47.2075 49.8316 48.5959 50.5086C49.2571 50.8139 50.5266 51.4378 51.439 51.8758C53.4886 52.8714 54.2423 53.5484 54.7448 54.8891L54.8771 55.221H51.3861H47.8951L47.6703 54.3316C47.4191 53.2829 46.8372 52.1413 46.1893 51.3714C45.4488 50.5086 44.2587 49.7387 41.6404 48.4776C39.8288 47.5882 39.0883 47.1634 38.771 46.805C38.361 46.3272 38.3478 46.3006 38.3478 44.9732C38.3478 43.7121 38.3743 43.5927 38.7445 43.0086C39.1677 42.3316 39.6702 41.0174 39.6702 40.5528C39.6702 40.3935 39.9082 39.9555 40.1991 39.5838C41.2173 38.3095 41.4553 37.1944 40.9925 35.8537C40.7148 35.0042 40.7148 34.9776 40.9528 34.2608C41.2041 33.4643 41.2834 31.3139 41.0851 30.3183L40.9793 29.7873L41.614 29.4953C42.1826 29.2298 43.0686 28.9909 43.6504 28.9511C43.7694 28.9378 43.9678 29.19 44.1529 29.5882Z" fill="white" />
                <path d="M9.65308 27.61V28.8047H12.0333H14.4135V27.61V26.4153H12.0333H9.65308V27.61Z" fill="white" />
                <path d="M20.4963 27.61V28.8047H21.9509H23.4055L24.1328 27.6764C24.5295 27.0525 24.8601 26.5215 24.8601 26.4817C24.8601 26.4419 23.8815 26.4153 22.6782 26.4153H20.4963V27.61Z" fill="white" />
                <path d="M9.65308 33.5836V34.7783H12.0333H14.4135V33.5836V32.3889H12.0333H9.65308V33.5836Z" fill="white" />
                <path d="M20.4963 33.5835V34.7782H22.0831C23.908 34.7782 23.789 34.8977 23.4848 33.318L23.3261 32.4552L21.9112 32.4154L20.4963 32.3755V33.5835Z" fill="white" />
                <path d="M9.74564 38.4555C9.69275 38.4953 9.65308 39.0396 9.65308 39.6502V40.752H12.0333H14.4135V39.5573V38.3626H12.1258C10.8564 38.3626 9.78531 38.4024 9.74564 38.4555Z" fill="white" />
                <path d="M20.4963 39.5573V40.752H22.5327H24.5691L24.0799 39.5838L23.5774 38.429L22.0302 38.3891L20.4963 38.3493V39.5573Z" fill="white" />
                <path d="M9.70598 44.5088C9.66631 44.615 9.65308 45.1593 9.67953 45.7434L9.7192 46.792L12.073 46.8318L14.4135 46.8584V45.5973V44.3363H12.0994C10.2746 44.3363 9.75887 44.3761 9.70598 44.5088Z" fill="white" />
                <path d="M20.4963 45.5973V46.8584L22.8501 46.8318L25.1906 46.792V45.5973V44.4026L22.8501 44.3628L20.4963 44.3363V45.5973Z" fill="white" />
            </svg>
        )
    }
}

export class ErrorsIcon extends Component {
    render(){
        return (
            <svg width="45" height="45" viewBox="0 0 60 60">
                <path d="M29.3402 2.84078C25.2242 3.45553 21.4562 6.51701 19.8482 10.5744C18.7802 13.2793 18.6842 16.6236 19.6202 19.4145C20.5682 22.267 22.7282 24.8859 25.3442 26.3613C29.4602 28.685 34.8362 28.3285 38.5202 25.4883C39.4442 24.7752 40.9202 23.2137 41.4602 22.3777C44.0282 18.3941 44.2562 13.3531 42.0482 9.23422C40.6202 6.56619 37.8962 4.23012 35.1602 3.33258C33.4202 2.76701 31.1522 2.57029 29.3402 2.84078ZM31.9562 5.95144C32.1722 6.0375 32.5202 6.30799 32.7242 6.55389C33.4442 7.38996 33.4442 7.42684 32.9522 13.1441C32.7002 15.9842 32.4482 18.517 32.3762 18.7752C32.2322 19.3408 31.6682 19.9186 31.2842 19.9186C31.1282 19.9186 30.8522 19.808 30.6842 19.6727C30.0602 19.1686 30.0722 19.2547 29.1962 8.7793C29.1122 7.74652 29.2682 7.16865 29.7962 6.55389C30.4202 5.82848 31.1762 5.60717 31.9562 5.95144ZM32.1362 21.1482C32.7002 21.5047 33.0002 22.0826 33.0002 22.808C33.0002 23.6072 32.6882 24.2096 32.0882 24.5539C30.8162 25.3039 29.4002 24.3695 29.4002 22.7834C29.4002 21.7014 30.1562 20.9023 31.2002 20.9023C31.5242 20.9023 31.8962 21.0006 32.1362 21.1482Z" fill="white" />
                <path d="M46.2001 12.3815C44.8681 12.6151 44.3401 12.8733 44.3401 13.2791C44.3401 13.6848 45.0841 14.0659 46.3801 14.3241C46.9081 14.4225 47.6401 14.57 48.0001 14.6438C49.4521 14.9389 50.7121 15.9594 51.3361 17.3118C51.6481 18.0004 51.6601 18.0618 51.6601 20.4717C51.6601 21.8241 51.6121 26.8528 51.5521 31.6602C51.4561 39.775 51.4321 40.4389 51.2161 41.0168C50.8921 41.9266 50.1841 42.7012 49.2241 43.1807L48.4201 43.5864L39.7801 43.6725C35.0281 43.7217 30.2281 43.7832 29.1241 43.7955L27.0961 43.8323L24.7321 46.2914C22.2721 48.8487 17.8681 53.0291 17.5681 53.0905C17.0641 53.2135 17.0521 53.0536 17.1121 48.7135C17.2081 42.9594 17.5441 43.3651 12.6001 43.2791C9.4201 43.2176 9.1441 43.193 8.6281 42.9594C7.9081 42.6151 7.1281 41.8159 6.7921 41.0782C6.5401 40.5127 6.5401 40.5127 6.5401 29.4471V18.3815L6.9361 17.5455C7.2241 16.9676 7.5001 16.5987 7.8841 16.2914C8.8081 15.5659 9.2641 15.4922 12.6001 15.4922C15.5281 15.4922 16.4521 15.4061 17.5561 15.0496C18.8641 14.6069 17.8921 14.1397 14.7001 13.6602C10.5121 13.0332 8.8801 12.984 7.5601 13.4635C5.8201 14.0905 4.3801 15.7873 3.7921 17.8774C3.5041 18.8856 3.3841 22.2914 3.2881 32.3364L3.2041 40.7586L3.4801 41.7299C4.1641 44.0905 6.0481 45.9102 8.4601 46.5373C8.9641 46.6725 9.8041 46.7217 11.4241 46.7217H13.6801V50.0414C13.6801 53.0536 13.7041 53.4102 13.9201 54.0127C14.2561 54.9471 14.8681 55.611 15.7921 56.0782C16.4641 56.4225 16.7041 56.4717 17.4601 56.4717C18.2161 56.4717 18.4561 56.4225 19.1281 56.0782C19.8241 55.734 20.3881 55.193 24.1441 51.2586L28.3801 46.8323L38.7601 46.8692C48.6361 46.9061 49.1761 46.8938 49.8001 46.6725C52.1881 45.8487 53.9281 43.9922 54.6841 41.4963C54.8881 40.8077 54.9001 40.193 54.8641 31.2299C54.8281 20.0045 54.7441 17.8528 54.3601 16.7832C53.5441 14.5823 51.7921 12.9102 49.7401 12.3569C48.8641 12.1356 47.5561 12.1356 46.2001 12.3815Z" fill="white" />
            </svg>
        )
    }
}

export class MoreIcon extends Component {
    render(){
        return (
            <svg width="45" height="45" viewBox="0 0 60 60">
                <path d="M15.2535 25C12.5141 25 10.2727 27.25 10.2727 30C10.2727 32.75 12.5141 35 15.2535 35C17.993 35 20.2343 32.75 20.2343 30C20.2343 27.25 17.993 25 15.2535 25ZM45.1383 25C42.3989 25 40.1575 27.25 40.1575 30C40.1575 32.75 42.3989 35 45.1383 35C47.8778 35 50.1192 32.75 50.1192 30C50.1192 27.25 47.8778 25 45.1383 25ZM30.1959 25C27.4565 25 25.2151 27.25 25.2151 30C25.2151 32.75 27.4565 35 30.1959 35C32.9354 35 35.1767 32.75 35.1767 30C35.1767 27.25 32.9354 25 30.1959 25Z" fill="white" />
            </svg>
        )
    }
}