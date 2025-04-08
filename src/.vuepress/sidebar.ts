import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
	'/my-react/': 'structure',
	'/my-vue/': [
		'',
		{
			text: '整体架构',
			icon: 'guide',
			children: ['1', '2'],
			collapsible: false
		},
		{
			text: '响应式原理',
			icon: 'sidebar',
			children: ['3', '4', '5', '6', '7'],
			collapsible: false
		},
		{
			text: '渲染原理',
			icon: 'flow',
			children: ['8', '9'],
			collapsible: false
		},
		{
			text: 'Diff 算法原理',
			icon: 'compare',
			children: ['10'],
			collapsible: false
		},
		{
			text: '组件渲染原理',
			icon: 'plugin',
			children: ['11', '12', '13', '14', '15', '16'],
			collapsible: false
		},
		{
			text: '其他实现原理',
			icon: 'box',
			children: ['17', '18', '19', '20'],
			collapsible: false
		},
		{
			text: '模板编译原理',
			icon: 'change',
			children: ['21', '22', '23', '24'],
			collapsible: false
		}
	],
	'/interview/': [
		{
			text: '前端基础',
			children: [
				{
					text: 'JavaScript 相关',
					icon: 'javascript',
					prefix: 'js/',
					children: 'structure',
					collapsible: true
				},
				{
					text: 'HTML 相关',
					icon: 'code',
					prefix: 'html/',
					children: 'structure',
					collapsible: true
				},
				{
					text: 'CSS 相关',
					icon: 'palette',
					prefix: 'css/',
					children: 'structure',
					collapsible: true
				}
			],
			collapsible: false
		},
		{
			text: '前端框架',
			children: [
				{
					text: 'React 相关',
					icon: 'react',
					prefix: 'react/',
					children: 'structure',
					collapsible: true
				},
				{
					text: 'Vue 相关',
					icon: 'vue',
					prefix: 'vue/',
					children: 'structure',
					collapsible: true
				}
			],
			collapsible: false
		},
		{
			text: '前端工程化',
			children: [
				{
					text: '构建工具',
					icon: 'waline',
					prefix: 'webpack/',
					children: 'structure',
					collapsible: true
				},
				{
					text: '版本管理',
					icon: 'git',
					prefix: 'git/',
					children: 'structure',
					collapsible: true
				},
				{
					text: '前端监控',
					icon: 'safe',
					prefix: 'engineering/',
					children: 'structure',
					collapsible: true
				}
			],
			collapsible: false
		},
		{
			text: '数据结构与算法',
			children: [
				{
					text: '算法笔记',
					icon: 'repo',
					link: 'https://wangfuyou.com/leetcode-js/book/',
					target: '_self'
				},
				{
					text: 'LeetCode 题解',
					icon: 'code',
					link: 'https://wangfuyou.com/leetcode-js/problem/',
					target: '_self'
				},
				{
					text: '剑指 Offer',
					icon: 'keyboard',
					link: 'https://wangfuyou.com/leetcode-js/offer/',
					target: '_self'
				},
				{
					text: '剑指 Offer II',
					icon: 'template',
					link: 'https://wangfuyou.com/leetcode-js/offer2/',
					target: '_self'
				},
				{
					text: '程序员面试金典',
					link: 'https://wangfuyou.com/leetcode-js/interview/',
					icon: 'result',
					target: '_self'
				}
			],
			collapsible: true
		},
		{
			text: '系统设计',
			children: [
				{
					text: '系统设计入门',
					icon: 'study',
					link: '/system-design/0_computer_architecture.html',
					target: '_self'
				},
				{
					text: '系统设计实战',
					icon: 'launch',
					link: '/system-design/21_a_framework_for_system_design_interviews.html',
					target: '_self'
				},
				{
					text: 'HTTP 相关',
					icon: 'http',
					prefix: 'http/',
					children: 'structure',
					collapsible: true
				},
				{
					text: 'NodeJS 相关',
					icon: 'nodeJS',
					prefix: 'nodejs/',
					children: 'structure',
					collapsible: true
				}
			],
			collapsible: false
		},
		{
			text: '行为面试',
			prefix: 'behavior/',
			children: 'structure',
			collapsible: true
		},
		{
			text: '最新技术趋势',
			prefix: 'trend/',
			children: 'structure',
			collapsible: true
		}
	],
	'/system-design/': [
		'',
		{
			text: '基础概述',
			icon: 'guide',
			children: [
				'0_computer_architecture',
				'1_application_architecture',
				'2_design_requirements'
			],
			collapsible: false
		},
		{
			text: '网络基础',
			icon: 'any',
			children: ['3_networking_basics', '4_tcp_and_udp', '5_dns'],
			collapsible: false
		},
		{
			text: 'APIs',
			icon: 'api',
			children: ['6_http', '7_websockets', '8_api_paradigms', '9_api_design'],
			collapsible: false
		},
		{
			text: '缓存',
			icon: 'cache',
			children: ['10_caching', '11_cdns'],
			collapsible: false
		},
		{
			text: '代理',
			icon: 'plugin',
			children: ['12_proxies_and_load_balancing', '13_consistent_hashing'],
			collapsible: false
		},
		{
			text: '存储',
			icon: 'mysql',
			children: [
				'14_sql',
				'15_nosql',
				'16_replication_and_sharding',
				'17_cap_theorem',
				'18_object_storage'
			],
			collapsible: false
		},
		{
			text: '分布式',
			icon: 'map',
			children: ['19_message_queues', '20_map_reduce'],
			collapsible: false
		},
		{
			text: '系统设计实战',
			icon: 'discover',
			children: [
				'21_a_framework_for_system_design_interviews.md',
				'22_back_of_the_envelope_estimation.md',
				'23_scale_from_zero_to_millions_of_users.md',
				'24_design_a_rate_limiter.md',
				'25_design_consistent_hashing.md',
				'26_design_a_key_value_store.md',
				'27_design_a_unique_id_generator_in_distributed_systems.md',
				'28_design_a_url_shortener.md',
				'29_design_a_web_crawler.md',
				'30_design_a_notification_system.md',
				'31_design_a_news_feed_system.md',
				'32_design_a_chat_system.md',
				'33_design_a_search_autocomplete_system.md',
				'34_design_youtube.md',
				'35_design_google_drive.md',
				'36_proximity_service.md',
				'37_nearby_friends.md',
				'38_google_maps.md',
				'39_distributed_message_queue.md',
				'40_metrics_monitoring_and_alerting_system.md',
				'41_ad_click_event_aggregation.md',
				'42_hotel_reservation_system.md',
				'43_distributed_email_service.md',
				'44_s3_like_object_storage.md',
				'45_real_time_gaming_leaderboard.md',
				'46_payment_system.md',
				'47_digital_wallet.md',
				'48_stock_exchange.md'
			],
			collapsible: false
		}
	]
});
