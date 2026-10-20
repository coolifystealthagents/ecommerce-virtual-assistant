export type ServiceContent = {
  slug: string; name: string; short: string; hero: string; heroAlt: string; audience: string;
  problem: string[]; inputs: string[]; workflow: string[]; deliverables: string[]; boundaries: string[]; qualityControls: string[];
  scenarios: { title: string; body: string }[]; faqs: { q: string; a: string }[];
};

export const serviceContent: ServiceContent[] = [
  {
    "slug": "product-listing-support",
    "name": "Product Listing Support",
    "short": "Maintain accurate catalog fields, assets, and review queues.",
    "hero": "/images/services/product-listing-support.svg",
    "heroAlt": "Catalog source records moving through a product listing quality workflow",
    "audience": "Catalog owners managing a growing SKU count, frequent launches, or inconsistent records across storefronts and marketplaces.",
    "problem": [
      "Product pages become unreliable when specifications, variants, images, and merchandising copy arrive through different channels. The hidden cost is not typing; it is finding the approved source, resolving missing fields, and showing a reviewer exactly what changed.",
      "A product listing assistant creates a controlled preparation layer. The assistant can assemble source material, populate approved fields, identify gaps, and place records into a review queue. Product claims, pricing, compliance language, and publication authority remain with the people assigned by your business."
    ],
    "inputs": [
      "Approved product information sheets or PIM records",
      "Current taxonomy, naming rules, and attribute dictionary",
      "Licensed image and media folders with usage instructions",
      "Channel templates and marketplace field requirements",
      "Pricing and promotion files owned by an authorized reviewer"
    ],
    "workflow": [
      "Receive a named batch and compare every SKU against the approved source package.",
      "Record missing, conflicting, or stale inputs before editing the storefront.",
      "Prepare titles, descriptions, attributes, variants, tags, image order, and metadata inside the allowed template.",
      "Run the listing checklist for required fields, formatting, link integrity, and variant consistency.",
      "Submit a change summary and exception list to the catalog owner for approval before publication."
    ],
    "deliverables": [
      "Review-ready product records with source notes",
      "Missing-field and conflict queue",
      "Image placement and alt-text checklist",
      "Variant and taxonomy consistency report",
      "Change log showing the record, field, source, and status"
    ],
    "boundaries": [
      "The assistant does not invent product claims, safety statements, certifications, dimensions, compatibility, ingredients, or warranty terms.",
      "The assistant does not approve prices, discounts, launch dates, regulated copy, or publication where your policy requires an owner.",
      "Your team remains responsible for substantiation, consumer law, accessibility decisions, intellectual-property rights, and the final customer-facing record."
    ],
    "qualityControls": [
      "Use field-level source links rather than relying on memory or chat history.",
      "Sample completed records by category and newness, with closer review for high-risk products.",
      "Treat blank, contradictory, or unverified source data as an exception - not an invitation to guess.",
      "Reconcile the published page against the approved record after imports or bulk changes."
    ],
    "scenarios": [
      {
        "title": "New collection launch",
        "body": "The assistant assembles source packs, prepares draft records, identifies missing photography or attributes, and gives the launch owner one exception queue instead of scattered questions."
      },
      {
        "title": "Marketplace normalization",
        "body": "The assistant maps approved catalog data into channel templates while preserving a record of transformations and fields that require channel-specific judgment."
      },
      {
        "title": "Catalog cleanup",
        "body": "The assistant finds incomplete descriptions, broken image order, inconsistent variant names, and orphaned tags, then submits bounded correction batches for review."
      }
    ],
    "faqs": [
      {
        "q": "Can an assistant publish products directly?",
        "a": "Only when your written access policy and approval workflow explicitly allow it. Many teams begin with draft-only access and an owner-controlled publishing queue."
      },
      {
        "q": "Will the assistant write product claims?",
        "a": "The assistant can format or place approved copy, but should not create unsupported performance, safety, health, environmental, or comparative claims."
      },
      {
        "q": "What should the first batch include?",
        "a": "Choose a small, representative category with complete source material. Include both straightforward products and known exceptions so the checklist is tested honestly."
      }
    ]
  },
  {
    "slug": "order-management",
    "name": "Order Management Support",
    "short": "Keep order exceptions, status records, and customer updates organized.",
    "hero": "/images/services/order-management.svg",
    "heroAlt": "Order records moving into a documented exception queue",
    "audience": "Store operators whose team spends too much time checking shipment status, matching notes, and reconstructing the history of order exceptions.",
    "problem": [
      "Orders rarely fail in one predictable way. Address questions, stock discrepancies, carrier delays, payment holds, split shipments, and warehouse notes can live in separate systems. Without one operating queue, customers receive inconsistent updates and owners make decisions without the full record.",
      "An order management assistant can keep routine status work visible. The role checks approved systems, updates non-financial fields, prepares customer messages from approved guidance, and routes exceptions to the correct owner. It does not make fraud, refund, payment, or inventory-allocation decisions."
    ],
    "inputs": [
      "Store order record and approved status definitions",
      "Fulfillment, warehouse, and carrier tracking systems",
      "Customer communication templates and service-level rules",
      "Exception matrix naming the responsible owner",
      "Approved escalation channel and operating schedule"
    ],
    "workflow": [
      "Review the order queue at agreed intervals and classify records by documented status.",
      "Compare storefront, warehouse, and carrier evidence without overwriting the system of record.",
      "Complete routine updates that fall inside written authority and log the source checked.",
      "Prepare an exception brief containing the order, timeline, evidence, customer context, and decision needed.",
      "Send approved customer updates and close the operational record only after the required evidence is present."
    ],
    "deliverables": [
      "Current order exception queue",
      "Status and evidence log",
      "Review-ready exception briefs",
      "Approved customer update drafts or sends",
      "Aging report grouped by owner and next action"
    ],
    "boundaries": [
      "The assistant does not capture payments, alter payment instruments, decide chargebacks, or access complete card information.",
      "The assistant does not approve refunds, replacements above policy, inventory commitments, shipping upgrades, or exceptions not covered by a written rule.",
      "Your business remains accountable for fraud controls, payment security, customer promises, tax treatment, fulfillment policy, and financial reconciliation."
    ],
    "qualityControls": [
      "Require a timestamped source for every status rather than a copied label with no evidence.",
      "Separate routine delays from exceptions needing financial, warehouse, or leadership judgment.",
      "Review aging and reopened cases, not only newly completed work.",
      "Compare customer-facing messages with the actual order timeline before sending."
    ],
    "scenarios": [
      {
        "title": "Carrier delay queue",
        "body": "The assistant verifies carrier evidence, prepares the approved delay message, records the next check time, and escalates shipments that cross your defined threshold."
      },
      {
        "title": "Split fulfillment",
        "body": "The assistant reconciles item-level status and prepares a clear summary so the customer and internal owner can see what shipped, what remains, and who owns the next decision."
      },
      {
        "title": "Address exception",
        "body": "The assistant gathers the submitted address, carrier status, and warehouse state, then routes the case without deciding whether a costly reroute should be approved."
      }
    ],
    "faqs": [
      {
        "q": "Can the role issue refunds?",
        "a": "Refund approval should remain with an authorized owner. An assistant may prepare the record or execute a specifically approved action if your controls allow it."
      },
      {
        "q": "Does this replace warehouse ownership?",
        "a": "No. The assistant improves the information flow and exception queue; the warehouse or fulfillment owner remains responsible for physical handling and inventory truth."
      },
      {
        "q": "Which metric is most useful?",
        "a": "Track exception age, completeness of evidence, reopen rate, and time to the accountable owner - not task volume alone."
      }
    ]
  },
  {
    "slug": "returns-support",
    "name": "Returns Support",
    "short": "Coordinate approved return steps without losing customer context.",
    "hero": "/images/services/returns-support.svg",
    "heroAlt": "A customer return request moving through an approved decision path",
    "audience": "Commerce teams handling repetitive return coordination across customer care, warehouses, carriers, and finance owners.",
    "problem": [
      "Returns create friction when policy, order evidence, product condition, shipping instructions, and refund authority are treated as one task. The customer sees one conversation, but the operation contains several accountable decisions.",
      "A returns assistant can gather the record, test it against a written eligibility checklist, send approved instructions, monitor receipt, and keep every owner informed. The role must stop where policy interpretation, material refunds, fraud concerns, or product-safety issues begin."
    ],
    "inputs": [
      "Published return policy and internal exception matrix",
      "Order, shipment, and customer conversation history",
      "Return merchandise authorization procedure",
      "Warehouse receipt and condition statuses",
      "Approved templates for instructions and status updates"
    ],
    "workflow": [
      "Capture the return request and verify the order, item, date, reason, and available evidence.",
      "Apply the written eligibility checklist without making exceptions or interpreting ambiguous policy.",
      "Send approved instructions or route the case to the policy owner with a concise evidence summary.",
      "Track shipment and warehouse receipt, keeping the customer record synchronized with operational evidence.",
      "Prepare the refund or replacement record for the authorized owner and document the final disposition."
    ],
    "deliverables": [
      "Complete return case record",
      "Eligibility checklist and exception flag",
      "Approved customer instructions",
      "Receipt and condition follow-up queue",
      "Decision-ready refund or replacement summary"
    ],
    "boundaries": [
      "The assistant does not override policy, promise an exception, determine fraud, assess legal rights, or decide whether damaged goods are safe.",
      "The assistant does not approve material refunds, credits, replacements, disposal, or inventory adjustments unless a precise written authority permits the action.",
      "Your team owns policy, consumer-law compliance, financial approval, product safety, inventory valuation, and final dispute handling."
    ],
    "qualityControls": [
      "Preserve the original customer reason and evidence rather than replacing it with a generic status.",
      "Match every instruction to the current approved policy version.",
      "Reconcile received items with the correct order and authorization before preparing a financial action.",
      "Review policy-exception and repeat-return patterns with the accountable owner."
    ],
    "scenarios": [
      {
        "title": "Routine eligible return",
        "body": "The assistant verifies the documented criteria, issues approved instructions, tracks receipt, and prepares the record for the refund owner."
      },
      {
        "title": "Damaged product report",
        "body": "The assistant preserves photographs and customer context, avoids safety conclusions, and routes the case to the product or compliance owner."
      },
      {
        "title": "Policy exception request",
        "body": "The assistant states what the published policy permits, documents the requested exception, and escalates without implying approval."
      }
    ],
    "faqs": [
      {
        "q": "Can an assistant decide whether a return is eligible?",
        "a": "The assistant can apply unambiguous written criteria. Any ambiguity, exception, safety issue, or discretionary outcome should move to the designated owner."
      },
      {
        "q": "Can the assistant approve refunds?",
        "a": "Not by default. Refund authority should be explicit, limited, and auditable; many teams keep approval entirely with finance or customer-care leadership."
      },
      {
        "q": "How do we protect customer data?",
        "a": "Use least-privilege access, avoid exporting unnecessary personal data, redact sensitive fields, and define retention and escalation rules with your privacy owner."
      }
    ]
  },
  {
    "slug": "marketplace-support",
    "name": "Marketplace Support",
    "short": "Maintain operational records across approved sales channels.",
    "hero": "/images/services/marketplace-support.svg",
    "heroAlt": "Marketplace cases moving into an owner escalation workflow",
    "audience": "Multi-channel operators who need consistent monitoring and evidence across marketplace dashboards without delegating strategic channel authority.",
    "problem": [
      "Marketplace operations combine catalog rules, cases, performance notifications, fulfillment status, and account controls. A missed alert can matter, but a rushed or unsupported response can matter more. The work needs a dependable watch function and a clear path to the channel owner.",
      "A marketplace support assistant can monitor named queues, maintain case records, gather source evidence, prepare approved updates, and surface deadlines. The role cannot interpret contracts, submit material appeals, alter commercial terms, or promise compliance outcomes."
    ],
    "inputs": [
      "Approved marketplace accounts with least-privilege roles",
      "Channel operating checklist and notification schedule",
      "Catalog source records and approved response templates",
      "Case ownership and deadline matrix",
      "Internal policy for appeals, suspensions, and regulated issues"
    ],
    "workflow": [
      "Check assigned dashboards and notifications on the agreed cadence.",
      "Record each actionable item with source link, received time, deadline, current state, and accountable owner.",
      "Complete routine record maintenance and template-based communication within written authority.",
      "Assemble evidence for cases while preserving the marketplace's original language and chronology.",
      "Escalate account health, policy, financial, legal, or high-impact inventory issues immediately to the named owner."
    ],
    "deliverables": [
      "Cross-channel action register",
      "Deadline and case-status monitor",
      "Evidence packets for owner review",
      "Approved catalog and status updates",
      "Weekly exception and recurring-pattern summary"
    ],
    "boundaries": [
      "The assistant does not accept contract changes, alter pricing strategy, decide appeals, admit violations, or make legal and regulatory representations.",
      "The assistant does not bypass marketplace controls, create unsupported product claims, or change sensitive account and payout settings.",
      "Your organization owns channel strategy, account health decisions, product compliance, commercial terms, taxes, payouts, and every formal appeal."
    ],
    "qualityControls": [
      "Link every case status to the original marketplace record and preserve deadline evidence.",
      "Use channel-specific checklists; similar fields can carry different definitions across platforms.",
      "Require owner review for anything affecting account health, policy standing, pricing, payouts, or customer rights.",
      "Audit permissions and inactive users on a defined schedule."
    ],
    "scenarios": [
      {
        "title": "Case monitoring",
        "body": "The assistant keeps the deadline, evidence, and current owner visible, then prepares a decision brief without submitting a material response independently."
      },
      {
        "title": "Catalog discrepancy",
        "body": "The assistant compares the marketplace record with the approved source and prepares the permitted correction or flags a channel-rule conflict."
      },
      {
        "title": "Account health notification",
        "body": "The assistant captures the complete notice and deadline, alerts the owner through the urgent path, and gathers requested records without predicting the outcome."
      }
    ],
    "faqs": [
      {
        "q": "Can the assistant submit marketplace appeals?",
        "a": "Material appeals should be approved and usually submitted by the accountable channel, legal, or compliance owner. The assistant can organize evidence and maintain the case record."
      },
      {
        "q": "Can one checklist cover every channel?",
        "a": "No. Use one common control model but keep channel-specific field, deadline, permission, and escalation instructions."
      },
      {
        "q": "What access should the role receive?",
        "a": "Only the minimum role needed for assigned tasks. Avoid payout, tax, user-administration, and high-impact commercial permissions unless specifically required and controlled."
      }
    ]
  },
  {
    "slug": "customer-support",
    "name": "Ecommerce Customer Support",
    "short": "Handle routine order and product questions from approved guidance.",
    "hero": "/images/services/customer-support.svg",
    "heroAlt": "Customer context moving into a clear response and escalation queue",
    "audience": "Customer-care teams that need consistent queue coverage while preserving policy, privacy, and commercial decision rights.",
    "problem": [
      "A fast response is not useful if it misses order context, contradicts policy, or hides an unresolved exception. Customer support becomes scalable when routine answers are grounded in current records and uncertain cases reach the right owner with a complete summary.",
      "An ecommerce support assistant can triage conversations, verify non-sensitive order context, use approved knowledge, document actions, and maintain follow-up queues. The assistant should not improvise policy, make legal commitments, or disclose information without verification."
    ],
    "inputs": [
      "Approved helpdesk access and identity-verification procedure",
      "Current knowledge base, product guidance, and communication standards",
      "Order-status sources and return or shipping policies",
      "Priority, vulnerability, abuse, safety, and escalation rules",
      "Quality rubric and coaching process"
    ],
    "workflow": [
      "Classify the request by intent, urgency, customer state, and verification requirement.",
      "Gather only the minimum approved context from the system of record.",
      "Respond using current guidance when the request fits a documented path.",
      "Pause and escalate policy exceptions, threats, safety issues, sensitive-data requests, payment disputes, or unclear identity.",
      "Document the action, next owner, promised follow-up, and evidence so the conversation can continue without reconstruction."
    ],
    "deliverables": [
      "Triage queue with priority and owner",
      "Context-rich customer replies",
      "Escalation briefs with conversation history",
      "Follow-up and promise register",
      "Quality sample with coaching themes"
    ],
    "boundaries": [
      "The assistant does not provide legal advice, approve material compensation, expose customer or payment data, or make unsupported product and delivery promises.",
      "The assistant does not conceal uncertainty or close a case when an accountable decision is still pending.",
      "Your team remains responsible for policy, consumer rights, privacy, refunds, fraud, safety, reputation-risk decisions, and final complaint resolution."
    ],
    "qualityControls": [
      "Score a sample for accuracy, policy fit, verification, tone, documentation, and correct escalation.",
      "Review reopened and transferred conversations to find weak knowledge or unclear ownership.",
      "Keep templates current and prohibit copying sensitive information into unapproved tools.",
      "Measure resolution quality and promise completion - not replies per hour alone."
    ],
    "scenarios": [
      {
        "title": "Where is my order?",
        "body": "The assistant verifies the customer through the approved process, checks current order and carrier evidence, and sends the matching guidance without inventing a delivery date."
      },
      {
        "title": "Product question",
        "body": "The assistant answers from approved product information or routes the question when compatibility, safety, or a claim is not documented."
      },
      {
        "title": "Angry exception request",
        "body": "The assistant acknowledges the issue, preserves the full context, and escalates the requested policy exception without promising an outcome."
      }
    ],
    "faqs": [
      {
        "q": "Will an assistant use scripts?",
        "a": "Approved templates provide consistency, but the assistant should adapt them to verified context without changing policy or inventing facts."
      },
      {
        "q": "What should always be escalated?",
        "a": "Define your own matrix, including threats, safety concerns, legal claims, sensitive-data requests, chargebacks, high-value exceptions, and unclear identity."
      },
      {
        "q": "How should performance be reviewed?",
        "a": "Use a balanced rubric covering accuracy, policy alignment, privacy, ownership, documentation, and customer clarity alongside timeliness."
      }
    ]
  },
  {
    "slug": "inventory-admin",
    "name": "Inventory Administration",
    "short": "Keep inventory records, reports, and reconciliation queues current.",
    "hero": "/images/services/inventory-admin.svg",
    "heroAlt": "Inventory system records moving into a reconciled status report",
    "audience": "Commerce and operations teams that need cleaner inventory records and exception visibility across storefronts, warehouses, and supplier inputs.",
    "problem": [
      "Inventory figures are easy to copy and difficult to trust. Timing differences, unreceived stock, bundles, reserved units, returns, damaged goods, and channel feeds can all create legitimate mismatches. A support role should make those differences inspectable rather than silently force numbers to agree.",
      "An inventory administration assistant can collect approved reports, maintain non-financial records, reconcile known fields, document variances, and prepare owner-ready summaries. The role does not value inventory, commit stock, approve purchases, or change controls to remove a discrepancy."
    ],
    "inputs": [
      "Named inventory system of record and report schedule",
      "Warehouse, storefront, supplier, and channel reports",
      "SKU, location, bundle, and status definitions",
      "Variance thresholds and escalation matrix",
      "Approved procedures for adjustments and cycle-count follow-up"
    ],
    "workflow": [
      "Collect reports for the same cutoff and record when each source was generated.",
      "Normalize approved identifiers without deleting the original source values.",
      "Compare balances by SKU, location, and status, then classify known timing differences separately from unexplained variances.",
      "Prepare a variance packet with source evidence, recent movements, and the specific owner decision needed.",
      "Update authorized administrative fields only after approval and preserve the adjustment trail."
    ],
    "deliverables": [
      "Cutoff-controlled inventory report pack",
      "SKU and location variance queue",
      "Bundle or component reconciliation record",
      "Owner-ready adjustment packet",
      "Aging and repeat-variance summary"
    ],
    "boundaries": [
      "The assistant does not value inventory, approve write-offs, commit stock to customers, place purchase orders, or decide whether a variance is fraud, shrinkage, or accounting error.",
      "The assistant does not alter historical evidence or force a balance solely to match another system.",
      "Your team retains responsibility for physical counts, financial reporting, purchasing, supplier commitments, inventory policy, and adjustment approval."
    ],
    "qualityControls": [
      "Compare reports with a shared cutoff and preserve source timestamps.",
      "Separate available, reserved, in-transit, returned, quarantined, and damaged states according to your definitions.",
      "Require approval evidence for adjustments and review repeat variances by SKU or location.",
      "Test a sample against physical or warehouse-controlled evidence rather than relying only on two synchronized feeds."
    ],
    "scenarios": [
      {
        "title": "Channel mismatch",
        "body": "The assistant compares timestamped channel and system records, identifies whether the difference is a known feed delay, and escalates unexplained units."
      },
      {
        "title": "Bundle reconciliation",
        "body": "The assistant applies the approved component rule, documents source balances, and flags combinations that would require a commercial or accounting decision."
      },
      {
        "title": "Inbound follow-up",
        "body": "The assistant tracks purchase and receipt references, gathers warehouse evidence, and prepares an aging list without marking stock available prematurely."
      }
    ],
    "faqs": [
      {
        "q": "Can the assistant make stock adjustments?",
        "a": "Only if a precise, approved procedure permits administrative entry after an authorized owner has approved the adjustment and evidence is retained."
      },
      {
        "q": "Can this replace cycle counts?",
        "a": "No. Administrative reconciliation improves visibility, but physical truth remains with warehouse-controlled counting and your inventory control process."
      },
      {
        "q": "What is the safest first workflow?",
        "a": "Begin with one location and one recurring report, establish cutoff discipline, then test a small variance queue before adding channels or adjustment access."
      }
    ]
  }
] as ServiceContent[];

export function detailedServiceBySlug(slug: string) { return serviceContent.find((service) => service.slug === slug); }
