import { NodeAPI } from 'node-red';

import { setRED } from './globals';
import { getExposedSettings } from './helpers/exposed-settings';
import apiNode from './nodes/api';
import buttonNode from './nodes/button';
import callServiceNode from './nodes/call-service';
import configServerNode from './nodes/config-server';
import currentStateNode from './nodes/current-state';
import deviceNode from './nodes/device';
import entityNode from './nodes/entity';
import entityConfigNode from './nodes/entity-config';
import eventsAllNode from './nodes/events-all';
import eventsStateNode from './nodes/events-state';
import fireEventNode from './nodes/fire-event';
import getEntitiesNode from './nodes/get-entities';
import getHistoryNode from './nodes/get-history';
import pollStateNode from './nodes/poll-state';
import renderTemplateNode from './nodes/render-template';
import tagNode from './nodes/tag';
import timeNode from './nodes/time';
import triggerStateNode from './nodes/trigger-state';
import waitUntilNode from './nodes/wait-until';
import webhookNode from './nodes/webhook';
import zoneNode from './nodes/zone';
import { createRoutes } from './routes';

const nodes: { [type: string]: any } = {
    'ha-api': apiNode,
    'ha-button': buttonNode,
    'api-call-service': callServiceNode,
    server: configServerNode,
    'api-current-state': currentStateNode,
    'ha-device': deviceNode,
    'ha-entity': entityNode,
    'ha-entity-config': entityConfigNode,
    'server-events': eventsAllNode,
    'server-state-changed': eventsStateNode,
    'ha-fire-event': fireEventNode,
    'ha-get-entities': getEntitiesNode,
    'api-get-history': getHistoryNode,
    'poll-state': pollStateNode,
    'api-render-template': renderTemplateNode,
    'trigger-state': triggerStateNode,
    'ha-tag': tagNode,
    'ha-time': timeNode,
    'ha-wait-until': waitUntilNode,
    'ha-webhook': webhookNode,
    'ha-zone': zoneNode,
};

export = (RED: NodeAPI): void => {
    setRED(RED);
    createRoutes();

    for (const type in nodes) {
        RED.nodes.registerType(type, nodes[type], getExposedSettings(type));
    }
};
